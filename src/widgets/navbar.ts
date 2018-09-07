import { Link } from '@dojo/framework/routing/Link';

import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import { VNode } from '@dojo/framework/widget-core/interfaces';
import { w } from '@dojo/framework/widget-core/d';

function createNavbar(): VNode {
    return v('nav', { classes: 'navbar' }, [
        v('div', { classes: 'container' }, [
            v('ul', { classes: 'navbar-list' }, [
                w(Link, { to: 'home', classes: 'navbar-link brand u-pull-left' }, [ 'Jordan Bayles']),
                w(Link, { to: 'photography', classes: 'navbar-link' }, [ 'Photography' ]),
                // w(Link, { to: 'projects', classes: 'navbar-link' }, [ 'Projects' ])
            ]),
        ])
    ]);
}

export class Navbar extends WidgetBase {
	protected render() {
		return createNavbar();
	}
}

export default Navbar;
