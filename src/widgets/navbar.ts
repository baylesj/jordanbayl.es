import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import { VNode } from '@dojo/framework/widget-core/interfaces';

class NavbarItem {
    constructor(text: string, href: string) {
        this.text = text;
        this.href = href;
    }

    text: string;
    href: string;
}

const navbarItems: NavbarItem[] = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Photography', href: '#' },
    { text: 'Projects', href: '#' }
];

function createNodeFromNavbarItem(item: NavbarItem): VNode {
    return v('li', { classes: 'navbar-item' }, [
        v('a', { classes: 'navbar-link', href: item.href }, [ item.text ])
    ]);
}

function createNavbarItems(): VNode[] {
    return navbarItems.map(createNodeFromNavbarItem);
}

function createNavbar() {
    return v('nav', { classes: 'navbar' }, [
        v('div', { classes: 'container' }, [
            v('ul', { classes: 'navbar-list' }, createNavbarItems())
        ])
    ]);
}

export class Navbar extends WidgetBase {
	protected render() {
		return createNavbar();
	}
}

export default Navbar;
