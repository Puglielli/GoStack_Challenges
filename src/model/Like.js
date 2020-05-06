class Like {

  constructor(id, idRepository, likes, lastUser, lastUpdtDt) {
    this.id = id;
    this.idRepository = idRepository;
    this.likes = likes;
    this.lastUser = lastUser;
    this.lastUpdtDt = lastUpdtDt;
  }
  
  get() {
    const { id, idRepository, likes, lastUser, lastUpdtDt } = this;
    
    const repository = {
      id,
      idRepository,
      likes,
      lastUser,
      lastUpdtDt
    };

    return repository;
  }

  addLikes() {
    this.lastUpdtDt = new Date();
    this.likes++;
  }
}

module.exports = Like;