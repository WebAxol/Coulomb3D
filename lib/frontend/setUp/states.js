import CalculateField from '../states/CalculateField.js';
import HandleInputs from '../states/HandleInputs.js';
import Render3D from '../states/Render3D.js';
// Define states
const _calculateField = new CalculateField();
const _handleInputs = new HandleInputs();
const _render3D = new Render3D();
// Setup transition between states
_calculateField.setUp({
    fieldCalculated: _render3D
});
_render3D.setUp({
    spaceRendered: _handleInputs
});
_handleInputs.setUp({
    cameraMoved: _render3D
});
// Configuration
const stateConfig = {
    initialState: _calculateField
};
export default stateConfig;
