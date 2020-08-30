import Slider from 'rc-slider';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const RangeSlider = props => {
	return <Range {...props} />;
};

export default RangeSlider;
