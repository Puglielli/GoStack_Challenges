class Repository {
  
  constructor(id, title, url, techs, likes, createDt, lastUpdtDt) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.techs = techs;
    this.likes = likes;
    this.createDt = createDt;
    this.lastUpdtDt = lastUpdtDt;
  }

  get() {
    const { id, title, url, techs, likes, createDt, lastUpdtDt } = this;

    // const like = {
    //   id: likes.id,
    //   likes: likes.likes,
    //   lastUser: likes.lastUser
    // };
    
    const repository = {
      id,
      title,
      url,
      techs,
      likes: likes.likes
      // createDt,
      // lastUpdtDt
    };

    return repository;
  }
}

module.exports = Repository;