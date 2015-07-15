RedmineApp::Application.routes.draw do
  get 'bulk_time_entries' => 'bulk_time_entries#index'
  get 'load_assigned_issues' => 'bulk_time_entries#load_assigned_issues'
  post 'save' => 'bulk_time_entries#save'
  post 'add_entry' => 'bulk_time_entries#add_entry'

end
