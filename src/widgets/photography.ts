import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import { VNode } from '@dojo/framework/widget-core/interfaces';

//import * as $ from 'jquery';

import '../styles/photography.css';

var photos = require('../photos/photos-metadata.json');

// TODO: move to config for dev/prod
const staticFolderPath = "https://jordanbayl.es/static/";

class PhotoMetadata {
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    name: string;
    description: string;
}

function getPhotos(): PhotoMetadata[] {
    return (photos as any).photos;
}

// function getPhotosAjax(successCallback: any): void {
//     const photoMetadataFileName = "photos-metadata.json";
//     $.ajax({
//         url: `${staticFolderPath}${photoMetadataFileName}`,
//         success: function(data) {
//             successCallback(data);
//         }
//     });
//}

function buildImageElement(metadata: PhotoMetadata): VNode {
    const url: string = `${staticFolderPath}${metadata.name}`;

    return v('a', { href: url, target: '_blank' }, [
        v('img', { classes: 'grid-item', src: url }),
        v('p', { classes: 'grid-caption' }, [ metadata.description ])
    ]);
}

export class Photography extends WidgetBase {
	protected render() {
		return v('div', { classes: 'grid' },
            getPhotos().map(buildImageElement)
        );
	}
}


export default Photography;
