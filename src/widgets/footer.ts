import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import { VNode } from '@dojo/framework/widget-core/interfaces';

import { DateObject } from '@dojo/framework/core/DateObject';

function createCopyrightStatement(): string {
    return `Copyright © ${DateObject.now().year} Jordan Bayles`;
}

function createFooter(): VNode {
    return v('footer', {}, [
        v('div', { classes: 'container' }, [
            v('em', {}, [createCopyrightStatement()])
        ])
    ]);
}

export class Footer extends WidgetBase {
	protected render() {
		return createFooter();
	}
}

export default Footer;
