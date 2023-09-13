const {
    createTask,
    fetchAllTasks,
    fetchTasksByUser,
    editedTask
  } = require('../queries/task');
  const { runQuery } = require('../config/database.config');
  
  /**
   * Creates a new post in the db
   * @param {object} body
   * @param {number} id
   * @returns {Response}
   */
  const makeTask = async (body, id) => {
    const { title, description } = body;
    const post = await runQuery(createTask, [title, description, id]);
    return {
      status: 'success',
      message: 'Task created successfully!',
      code: 201,
      data: {
        post,
      },
    };
  };
  
  /**
   * Fetches all posts from the db
   * @returns {Response}
   */
  const getAllTasks = async () => {
    const result = await runQuery(fetchAllTasks);
    return {
      status: 'success',
      message: 'Tasks fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };
  
  /**
   * Gets posts by a single user
   * @param {number} id
   * @returns {Response}
   */
  const getTaskByUser = async (id) => {
    const result = await runQuery(fetchTasksByUser, [id]);
    return {
      status: 'success',
      message: 'Tasks fetched successfully!',
      code: 200,
      data: {
        result,
      },
    };
  };
  
  /**
   * Edits a post
   * @param {string} title 
   * @param {string} text 
   * @param {number} id 
   * @returns {Response}
   */
  const editTask = async (title, description, id) => {
      const result = await runQuery(editedTask, [title, description, id]);
      return {
        status: 'success',
        message: 'Tasks edited successfully!',
        code: 200,
        data: {
          result,
        },
      };
  }
  
  module.exports = {
    makeTask,
    getAllTasks,
    getTaskByUser,
    editTask
  };
  