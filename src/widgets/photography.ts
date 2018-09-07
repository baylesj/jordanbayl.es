import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import { VNode } from '@dojo/framework/widget-core/interfaces';

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

function buildImageElement(metadata: PhotoMetadata): VNode {
    const url: string = `${staticFolderPath}${metadata.name}`;

    return v('div', { classes: 'item photo'}, [
        v('div', { classes: 'content' }, [
            v('a', { href: url, target: '_blank', classes: '' }, [
                v('img', { classes: 'photothumb', src: url })
            ]),
            v('div', { classes: 'desc' }, [ `${metadata.description}` ]),
        ])
    ]);
}

function getIntro(): VNode {
    return v('div', { id: '', classes: 'intro' }, [
        v('p', {}, [
            "One of my biggest interests over the past few years has been taking photos " +
            "of my experiences. I've been fortunate enough to travel to new places, see " +
            "new things, and make amazing experiences.",
            //v("br", {}),
            "Here are some of my current favorites:"
        ])
    ]);
}

export class Photography extends WidgetBase {
	protected render() {
        return v('div', { classes: 'widget' }, [
            v('div', { classes: 'article' }, [
                getIntro()
            ]),
            v('div', { classes: 'grid' },
                getPhotos().map(buildImageElement)
            )
        ]);
	}
}

export default Photography;
