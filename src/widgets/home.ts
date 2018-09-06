import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

export class Home extends WidgetBase {
	protected render() {
		return v('div', {}, ["Home"]);
	}
}

export default Home;
