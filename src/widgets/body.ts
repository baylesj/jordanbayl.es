import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import { w } from '@dojo/framework/widget-core/d';

import Navbar from './navbar';
import HomeOutlet from '../outlets/homeOutlet';
import PhotographyOutlet from '../outlets/photographyOutlet';
import ProjectsOutlet from '../outlets/projectsOutlet';
import Footer from './footer';

export class Body extends WidgetBase {
	protected render() {
        return v('div', { classes: 'wrap' }, [
            w(Navbar, {}),
            w(HomeOutlet, {}),
            w(PhotographyOutlet, {}),
            w(ProjectsOutlet, {}),
            w(Footer, {})
        ]);
	}
}

export default Body;
