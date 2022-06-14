 
 const story =[
  {
    "id": 1,
    "name": "zuckerberg",
    "img": "https://assets.change.org/photos/3/pz/ur/IZPZUrJczRxOpDB-400x400-noPad.jpg?1528808989"
  },
  {
    "id": 1,
    "name": "Sundar pichai",
    "img": "data:image/jpeg;base64,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"
  },

  {
    "id": 1,
    "name": "Elon musk",
    "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
  },

  {
    "id": 7,
    "name": "bill gates",
    "img": "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
  },
  {
    "id": 2,
    "name": "jack ma",
    "img": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg"
  },

  {
    "id": 3,
    "name": "jeff Bezos",
    "img": "https://gsfiles.s3.amazonaws.com/images/folder73/profilePic73-1462417920217.jpg"
  },
  {
    "id": 1,
    "name": "shakuur ally",
    "img": "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
  },

  {
    "id": 1,
    "name": "zuckerberg",
    "img": "https://assets.change.org/photos/3/pz/ur/IZPZUrJczRxOpDB-400x400-noPad.jpg?1528808989"
  },
  {
    "id": 1,
    "name": "Sundar pichai",
    "img": "data:image/jpeg;base64,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"
  },
  {
    "id": 1,
    "name": "Tim cook",
    "img": "https://cdn.vox-cdn.com/thumbor/bZEcNPiJmc0E9uUMiPY7E30DAV4=/0x0:4322x2881/1200x800/filters:focal(1899x853:2589x1543)/cdn.vox-cdn.com/uploads/chorus_image/image/67183754/1192017192.jpg.0.jpg"
  },
  {
    "id": 1,
    "name": "kevin systrom",
    "img": "https://content.fortune.com/wp-content/uploads/2014/10/kevinsystrom-headshot.jpg"
  },
  {
    "id": 1,
    "name": "Elon musk",
    "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
  },
  {
    "id": 1,
    "name": "Elon musk",
    "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
  },
  {
    "id": 1,
    "name": "Elon musk",
    "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
  },

  {
    "id": 7,
    "name": "bill gates",
    "img": "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
  },
  {
    "id": 2,
    "name": "jack ma",
    "img": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Enabling_eCommerce-_Small_Enterprises%2C_Global_Players_%2839008130265%29_%28cropped%29.jpg"
  },

  {
    "id": 3,
    "name": "jeff Bezos",
    "img": "https://gsfiles.s3.amazonaws.com/images/folder73/profilePic73-1462417920217.jpg"
  },
  {
    "id": 1,
    "name": "shakuur ally",
    "img": "https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
  },

  {
    "id": 1,
    "name": "zuckerberg",
    "img": "https://assets.change.org/photos/3/pz/ur/IZPZUrJczRxOpDB-400x400-noPad.jpg?1528808989"
  },
  {
    "id": 1,
    "name": "Sundar pichai",
    "img": "data:image/jpeg;base64,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"
  },
  {
    "id": 1,
    "name": "Tim cook",
    "img": "https://cdn.vox-cdn.com/thumbor/bZEcNPiJmc0E9uUMiPY7E30DAV4=/0x0:4322x2881/1200x800/filters:focal(1899x853:2589x1543)/cdn.vox-cdn.com/uploads/chorus_image/image/67183754/1192017192.jpg.0.jpg"
  },
  {
    "id": 1,
    "name": "kevin systrom",
    "img": "https://content.fortune.com/wp-content/uploads/2014/10/kevinsystrom-headshot.jpg"
  }
]

export default story;