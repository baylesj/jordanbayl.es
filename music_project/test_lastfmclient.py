import lastfmclient
import os
import unittest

class TestLastFmClient(unittest.TestCase):
    def setUp(self):
        self.client = lastfmclient.LastFmClient()

    def test_get_artist_list(self):
        self.assertTrue(len(self.client.get_artist_list()) > 0)

    def test_get_artist_search_endpoint(self):
        def assert_artist_search_endpoint(artist, expected):
            self.assertEqual(expected, self.client.get_artist_search_endpoint(artist, "testkey"))

        assert_artist_search_endpoint("",
            "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=&api_key=testkey&format=json")

        assert_artist_search_endpoint("Lorde", "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=Lorde&api_key=testkey&format=json")
        assert_artist_search_endpoint("Billy Joel", "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=Billy+Joel&api_key=testkey&format=json")
        assert_artist_search_endpoint("21 Pilots", "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=21+Pilots&api_key=testkey&format=json")

if __name__ == '__main__':
    unittest.main()