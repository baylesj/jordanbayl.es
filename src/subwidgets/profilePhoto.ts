import { VNode } from '@dojo/framework/widget-core/interfaces';
import { v } from '@dojo/framework/widget-core/d';

const profilePhoto = require('../img/profile.jpg');

export default function getProfilePhoto(): VNode {
    return v('div', {}, [
        v('img', { src: profilePhoto, class: 'profile-photo' }, ["Profile Photo"])
    ]);
}