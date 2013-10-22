RedmineApp::Application.routes.draw do
  match 'bulk_time_entries' => 'bulk_time_entries#index'
  match 'load_assigned_issues' => 'bulk_time_entries#load_assigned_issues'
  match 'save' => 'bulk_time_entries#save'
  match 'add_entry' => 'bulk_time_entries#add_entry'

end
