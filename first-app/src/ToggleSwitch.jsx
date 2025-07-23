import React from "react";
import PropTypes from "prop-types";
import "./ToggleSwitch.css"; // define your styles as shown below

const ToggleSwitch = ({ id, checked, onChange, disabled }) => (
  <div className="toggle-switch">
    <input
      type="checkbox"
      className="toggle-switch-checkbox"
      id={id}
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      disabled={disabled}
    />
    <label className="toggle-switch-label" htmlFor={id}>
      <span className="toggle-switch-inner" />
      <span className="toggle-switch-switch" />
      <span className="toggle-switch-text">Text Sampleadsffasxcvvxzcvzxvzxsdfdsfasd</span>
    </label>
  </div>
);

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

export default ToggleSwitch;
