import React from 'react';
import './InsightsHeader.scss';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";


function InsightsHeader({ dropdownVisibility, handleMetrics }) {

  return (
    <div className='insightsHeader'>
      <h4 className='insightsHeader__title'>Ad Insights</h4>
      <div className='insightsHeader__metricsAndHelp'>
        <div className={`insightsHeader__metrics ${dropdownVisibility}`} >
            <select name="metrics" onChange={handleMetrics}>
                <option id="clicks" value="clicks" defaultValue>Clicks</option>
                <option id="cost" value="cost">Cost</option>
                <option id="conversions" value="conversions">Conversions</option>
                <option id="revenue" value="revenue">Revenue</option>
            </select>
        </div>
        <div className='insightsHeader__help'>
            <HelpOutlineOutlinedIcon className='helpIcon' />
        </div>
      </div>
    </div>
  )
}

export default InsightsHeader
