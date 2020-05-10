class Validators {

  checkExistFields(req, res, next) {
    const { title, url, techs } = req.body;
  
    if (!title) return res.status(400).json({ error: 'Fields required' });

    if (!url) return res.status(400).json({ error: 'Fields required' });

    if (!techs) return res.status(400).json({ error: 'Fields required' });
  
    return next();
  }

  checkExistInArray(req, res, next) {
    const { id } = req.params;
    const { repositories } = req;
    
    const repositoryIndex = repositories.findIndex(repository => repository.id == id);
  
    if(repositoryIndex < 0) return res.status(400).json({ error: 'Repository not found' });
  
    req.index = repositoryIndex;
  
    return next();
  }
}

module.exports = new Validators();