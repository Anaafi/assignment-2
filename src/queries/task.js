const createTask = `
INSERT INTO posts (
    title,
    description,
    user_id
) VALUES ($1, $2, $3) RETURNING id, description, title, user_id
`;

const fetchAllTasks = `
SELECT t.id, t.title, t.description, 
json_build_object(
    'id', u.id,
    'email', u.email,
) as user
FROM tasks t
INNER JOIN users u on t.user_id = u.id
`;

const fetchTasksByUser = `
SELECT id, title, description FROM tasks WHERE user_id=$1
`;

const editedTask = `
UPDATE tasks
SET title=$1, description=$2, completed=True
WHERE task=$3
RETURNING *
`;

const fetchTaskById = `SELECT user_id FROM tasks WHERE id=$1`;


module.exports = {
  createTask,
  fetchAllTasks,
  fetchTasksByUser,
  editedTask,
  fetchTaskById,
};
