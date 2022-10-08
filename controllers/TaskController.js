const Task = require('../models/Anime')

module.exports = class TaskController {

  static createAnime(req, res) {

    res.render('tasks/create')
  }

  static async createAnimeSave(req, res) {
    const task = {
      anime: req.body.title,
      lancamento: req.body.lancamento,
      descricao: req.body.descricao,
    }
    await Task.create(task)
      .then(res.redirect('/tasks'))
  }

  static async showAnimes(req, res) {
    await Task.findAll({ raw: true })
      .then((data) => {
        let emptyAnimes = false

        if (data.length === 0) {
          emptyAnimes = true
        }

        res.render('tasks/animes', { tasks: data, emptyAnimes })
      }).catch((err) => console.log(err))
  }

  //rota do update
  static updateAnime(req, res) {
    const id = req.params.id

    Task.findOne({ where: { id: id }, raw: true })
      .then((data) => {
        res.render('tasks/edit', { task: data })
      })
      .catch((err) => console.log(err))
  }
  // rota que salva o update

  static async updateAnimePost(req, res) {
    const id = req.body.id
    const task = {
      anime: req.body.title,
      lancamento: req.body.lancamento,
      descricao: req.body.descricao,
    }

    await Task.update(task, { where: { id: id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err))
  }
  //Remove

  static async removeAnime(req, res) {
    const id = req.body.id

    await Task.destroy({ where: { id: id } })
      .then(res.redirect('/tasks'))
      .catch((err) => console.log(err))
  }

  //Status do Anime
  static async statusAnime(req, res) {
    const id = req.body.id

    const task = {
      done: req.body.done === '0' ? true : false,
    }

    await Task.update(task, { where: { id: id } })
      .then(await res.redirect('/tasks'))
      .catch((err) => console.log())
  }


} // fim da controller


