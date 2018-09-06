import { ProjectorMixin } from '@dojo/framework/widget-core/mixins/Projector';
import Body from './widgets/body';

import { Registry } from '@dojo/framework/widget-core/Registry';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';

import * as Masonry from 'masonry-layout';

const routingConfig = [
	{
		path: 'directory',
		outlet: 'directory',
		children: [
			{
				path: '{filter}',
				outlet: 'filter'
			}
		]
	},
	{
		path: 'about',
		outlet: 'about'
	},
	{
		path: 'home',
		outlet: 'home'
	},
	{
		path: 'photography',
		outlet: 'photography'
	},
	{
		path: 'projects',
		outlet: 'projects'
	},
	{
		path: '/',
		outlet: 'home',
		defaultRoute: true
	}
];


const registry = new Registry();
registerRouterInjector(routingConfig, registry);

const Projector = ProjectorMixin(Body);
const projector = new Projector();

projector.setProperties({ registry });
projector.append();

window.onhashchange = function() {
    window.requestAnimationFrame(function() {
        new Masonry('.grid', {
            fitWidth: true,
            itemSelector: '.grid-item',
            percentPosition: true
        });
    });
}

// Initial load if we are first navigated to one with a grid.
new Masonry('.grid', {
    fitWidth: true,
    itemSelector: '.grid-item',
    percentPosition: true
});