import React from "react";
import PropTypes from "prop-types";
import Dash from "react-native-dash";
import moment from "moment-timezone";
import styles, {
  _dashStyle,
  _dayTextStyle,
  _monthTextStyle
} from "./PointLine.style";
import { Text, View } from "react-native";
import Point from "./components/Point";

const PointLine = props => {
  const {
    data,
    day,
    month,
    isLastMember,
    dayTextStyle,
    length,
    monthTextStyle,
    monthFontColor,
    monthFontFamily,
    dayFontColor,
    dayFontFamily,
    timelineColor,
    timezone,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerGlue}>
        <Text
          style={dayTextStyle || _dayTextStyle(dayFontColor, dayFontFamily)}
        >
          {moment(data).format("DD") || "19"}
        </Text>
        <Text
          style={
            monthTextStyle || _monthTextStyle(monthFontColor, monthFontFamily)
          }
        >
          {moment(data)
            .tz(timezone || moment.tz.guess())
            .format("MMM")
            .toUpperCase() || "TUE"}
        </Text>
      </View>
      <View style={styles.dividerStyle}>
        {!isLastMember && (
          <Dash
            dashGap={7}
            dashColor={timelineColor}
            style={_dashStyle(length)}
            {...props}
          />
        )}
        <Point {...props} />
      </View>
    </View>
  );
};

PointLine.propTypes = {
  dayFontColor: PropTypes.string,
  dayFontFamily: PropTypes.string,
  monthFontColor: PropTypes.string,
  monthFontFamily: PropTypes.string,
  timelineColor: PropTypes.string,
  timezone: PropTypes.string,
};

PointLine.defaultProps = {
  dayFontColor: "#984cf8",
  monthFontColor: "#ded9e6",
  timelineColor: "#e3e3e3",
};

export default PointLine;
