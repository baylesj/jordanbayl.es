import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

export class Projects extends WidgetBase {
	protected render() {
		return v('div', { classes: 'widget' }, ["Projects!"]);
	}
}

export default Projects;
