export const _dateStyle = (color, fontFamily, isCard) => ({
  color,
  fontFamily,
  fontSize: 10,
  marginLeft: 32,
  marginTop: isCard ? 8 : 0
});

export const _cardContainer = (isCard, shadowColor, backgroundColor) => {
  return [
    {
      marginTop: -5,
      paddingTop: 12,
      marginLeft: 24,
      flexDirection: "row",
      paddingBottom: 6,
    },
  ];
};

export default {
  container: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 16,
    paddingBottom: 3,
    alignSelf: "stretch",
    flexDirection: "column",
    // borderWidth: 1
  },
  cardContainerGlue: {
    flex: 1,
    alignSelf: 'stretch'
  }
};
