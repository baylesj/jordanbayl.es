import json
import urllib.parse
import urllib.request
import os
import yaml

ARTIST_LIST_JSON_FILENAME = "./artist_list.json"
API_KEY = os.environ["LASTFM_API_KEY"]

class LastFmClient:
    def __init__(self):
        with open ("./last_fm.yaml", "r") as ymlfile:
            self.config = yaml.load(ymlfile)

    def get_artist_list(self):
        """Load the list of artists from the json file"""
        with open(ARTIST_LIST_JSON_FILENAME, "r") as f:
            return json.load(f)["artists"]

    def get_endpoint(self, domain, method, artist_name, api_key=API_KEY):
        """Generates a URL to hit a method on the last.fm API"""
        url_encoded_artist_name = urllib.parse.quote_plus(artist_name)
        return self.config[domain]["endpoint"].format(self.config[domain][method],
                                              url_encoded_artist_name,
                                              api_key)

    def get_artist_search_endpoint(self, artist_name, api_key=API_KEY):
        """Generate the URL to post a request against to get artist info for"""
        return self.get_endpoint("artist", "search", artist_name, api_key)

    def get_artist_info(self, artist_name):
        """Get metadata, such as name, listeners, etc. for a given artist"""
        search_address = self.get_artist_search_endpoint(artist_name)
        content = urllib.request.urlopen(search_address)

        # Note: this assumes that if there are multiple responses, we only want the most popular artist
        return json.load(content)["results"]["artistmatches"]["artist"][0]

def main():
    pass


if __name__ == "__main__":
    main()