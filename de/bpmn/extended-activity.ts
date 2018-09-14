import * as de from '../../de'; // <-- import our namespace
export const ComplexGateway = de.bpmn.Activity.extend({});

import {Activity} from './activity'; // <-- or, what most people do, and what I recommend, import the stuff you need directly
export const ComplexGateway2 = Activity.extend({});