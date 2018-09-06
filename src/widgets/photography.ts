import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import '../styles/photography.css';

const photoNames: string[] = [
	"JPB_170820_195646%20(Large).jpg",
	"DSC_1075%20(Large).jpg",
	"DSC_1093%20(Large).jpg",
	"DSC_3784%20(Large).jpg",
	"DSC_4150%20(Large).jpg",
	"DSC_4193%20(Large).jpg",
	"DSC_4196%20(Large).jpg",
	"DSC_5016%20(Large).jpg",
	"DSC_5135%20(Large).jpg",
	"DSC_5197%20(Large).jpg",
	"DSC_5231%20(Large).jpg",
	"DSC_5241%20(Large).jpg",
	"DSC_5271%20(Large).jpg",
	"DSC_5299%20(Large).jpg",
	"DSC_5327%20(Large).jpg",
	"DSC_5329%20(Large).jpg",
	"DSC_6541%20(Large).jpg",
	"DSC_6632%20(Large).jpg",
	"DSC_6757%20(Large).jpg",
	"DSC_6758%20(Large).jpg",
	"DSC_6859%20(Large).jpg",
	"DSC_6874%20(Large).jpg",
	"DSC_7057%20(Large).jpg",
	"DSC_7285%20(Large).jpg",
	"DSC_7289%20(Large).jpg",
	"DSC_7297%20(Large).jpg",
	"DSC_7525%20(Large).jpg",
	"DSC_7645%20(Large).jpg",
	"DSC_7681%20(Large).jpg",
	"DSC_7705%20(Large).jpg",
	"DSC_7711%20(Large).jpg",
	"DSC_7718%20(Large).jpg",
	"DSC_7740%20(Large).jpg",
	"DSC_7745%20(Large).jpg",
	"DSC_7768%20(Large).jpg",
	"DSC_7778%20(Large).jpg",
	"DSC_7808%20(Large).jpg",
	"DSC_7808-2%20(Large).jpg",
	"DSC_7816%20(Large).jpg",
	"DSC_7828%20(Large).jpg",
	"DSC_7840%20(Large).jpg",
	"DSC_7864%20(Large).jpg",
	"DSC_7878%20(Large).jpg",
	"DSC_7886%20(Large).jpg",
	"DSC_7922%20(Large).jpg",
	// "DSC_7970%20(Large).jpg",
	// "DSC_7973%20(Large).jpg",
	// "DSC_7979%20(Large).jpg",
	// "DSC_7997%20(Large).jpg",
	// "DSC_8148%20(Large).jpg",
	// "DSC_8169%20(Large).jpg",
	// "DSC_8195%20(Large).jpg",
	// "JPB_161223_144918%20(Large).jpg",
	// "JPB_170715_053830%20(Large).jpg",
	// "JPB_170715_054604%20(Large).jpg",
	// "JPB_170716_141504%20(Large).jpg",
	// "JPB_170716_141516%20(Large).jpg",
	// "JPB_170716_141622%20(Large).jpg",
	// "JPB_170819_152248%20(Large).jpg",
	// "JPB_170819_161606%20(Large).jpg",
	// "JPB_170819_164700%20(Large).jpg",
	// "JPB_170820_110724%20(Large).jpg",
	// "JPB_170820_133026%20(Large).jpg",
];

export class Photography extends WidgetBase {
	protected render() {
		return v('div',
		         { classes: 'grid' },
		         photoNames.map(x => v('img', { classes: 'grid-item', src: `https://jordanbayl.es/static/${x}` })));
	}
}


export default Photography;
