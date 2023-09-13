const {
    makeTask,
    getAllTasks,
    getTaskByUser,
    editTask,
  } = require('../services/task.service');
  
  /**
   * Creates a post
   * @param {Request} req
   * @param {Response} res
   * @param {object} next
   * @returns {JSON | Error}
   */
  const createTask = async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await makeTask(req.body, id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  
  /**
   * Fetches all posts
   * @param {Request} req
   * @param {Response} res
   * @param {object} next
   * @returns {JSON | Error}
   */
  const fetchAllTasks = async (req, res, next) => {
    try {
      const result = await getAllTasks();
      return res.status(result.code).json(result);
    } catch (error) {
      return next(error);
    }
  };
  
  /**
   * Gets all posts by a user
   * @param {Request} req
   * @param {Response} res
   * @param {object} next
   * @returns {JSON | Error}
   */
  const fetchTaskByUser = async (req, res, next) => {
    try {
      const { id } = req.user;
      const response = await getTaskByUser(id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  
  /**
   * Updates a post
   * @param {Request} req
   * @param {Response} res
   * @param {object} next
   * @returns {JSON | Error}
   */
  const updateTask = async (req, res, next) => {
    try {
      const { title, description } = req.body;
      const { id } = req.user;
      const response = await editTask(title, description, id);
      return res.status(response.code).json(response);
    } catch (error) {
      return next(error);
    }
  };
  
  module.exports = {
    createTask,
    fetchAllTasks,
    fetchTaskByUser,
    updateTask,
  };
  