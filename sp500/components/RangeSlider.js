import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const RangeSlider = props => {
	return <Range {...props} />;
};

export default RangeSlider;
