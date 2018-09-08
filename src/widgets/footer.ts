import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import { VNode } from '@dojo/framework/widget-core/interfaces';

import { DateObject } from '@dojo/framework/core/DateObject';

function createCopyrightStatement(): string {
    return `Copyright \u00A9 ${DateObject.now().year} Jordan Bayles`;
}

function createGithubLink(): VNode {
    return v("a", { href: "https://github.com/baylesj/jordanbayl.es" }, [ "GitHub" ]);
}

function createFooterNode(): VNode {
    return v('em', {}, [
        v('div', { classes: 'six columns merge-right' }, [createCopyrightStatement(), ". "]),
        v('div', { classes: 'six columns merge-left' }, [
            "This site is open source on ",
            createGithubLink()
        ])
    ]);
}

function createFooter(): VNode {
    return v('footer', {}, [
        v('div', { classes: 'container' }, [
            createFooterNode()
        ])
    ]);
}

export class Footer extends WidgetBase {
	protected render() {
		return createFooter();
	}
}

export default Footer;
