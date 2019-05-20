export const getSeason = (lat, month) => {
  if (month > 1 && month < 5) {
    return lat > 0
      ? 'spring'
      : 'fall';
  } else if (month > 4 && month < 8) {
    return lat > 0
      ? 'summer'
      : 'winter';
  } else if (month > 7 && month < 11) {
    return lat > 0
      ? 'fall'
      : 'spring';
  } else {
    return lat > 0
      ? 'winter'
      : 'summer';
  }
};

export const seasonConfig = {
  winter: {
    header: "It's only cold if you're standing still",
    activities: [
      {
        image: 'snowman.png',
        header: 'skiing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }, {
        image: 'mask.png',
        header: 'theater',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }, {
        image: 'fishing.png',
        header: 'fishing',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }
    ]
  },
  spring: {
    header: 'Spring is in the Air',
    activities: [
      {
        image: 'football.png',
        header: 'football',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }, {
        image: 'flower.png',
        header: 'gardening',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }, {
        image: 'tennis.png',
        header: 'tennis',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }
    ]
  },
  summer: {
    header: 'Life is better at the Beach',
    activities: [
      {
        image: 'campfire.png',
        header: 'camping',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }, {
        image: 'volleyball.png',
        header: 'volleyball',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }, {
        image: 'fins.png',
        header: 'snorkeling ',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }
    ]
  },
  fall: {
    header: 'Every leaf speaks bliss to me, fluttering from the autumn tree',
    activities: [
      {
        image: 'cycling.png',
        header: 'cycling',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }, {
        image: 'painting.png',
        header: 'painting',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }, {
        image: 'ping-pong.png',
        header: 'ping pong',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis mauris.'
      }
    ]
  }
};
