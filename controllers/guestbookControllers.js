export const static_landing_page = (req, res) => {
  res.send("index.html");
};

export const entries_list = function (req, res) {
  res.send('<h1>Guestbook Messages</h1><p>Not yet implemented: will show a list of guest book entries.</p>');
}

export const show_new_entries = (req, res) => {
  res.send('<h1New Messages</h1><p>Not yet implemented: will show a form to allow users to add new entries.</p>');
};

export const show_login = (req, res) => {
   res.send('<p>Not yet implemented: will show a login form</p>');
};

export const show_register_page = (req, res) => {
     res.send('<p>Not yet implemented: will show a registration form</p>');
};