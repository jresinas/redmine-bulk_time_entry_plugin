function getLastTimeEntryDate() {
  if ($('.spent_on').size() > 0) {
    return $('.spent_on')[($('.spent_on').length)-1].value;
  } else {
    return null;
  }
}

function chanegIssuesForProject(projectId, entryId) {
  $.ajax({
    complete: function(request){},
    data: 'project_id=' + projectId + '&entry_id=' + entryId,
    type: 'post',
    url: '/load_assigned_issues'
  });
}

function focusToLastProjectSelect() {
  $('#entries').find("[id$=project_id]").last().focus();
}

function setLinkParams() {
  focusToLastProjectSelect();

  $('#add-entry-link').on('click', function(event) {
    event.preventDefault();
    var project_id = $('#entries select[id*="_project_id"]').last().val();
    var issue_id = $('#entries select[id*="_issue_id"]').last().val();
    var hours = $('#entries input[id*="_hours"]').last().val();
    var activity_id = $('#entries select[id*="_activity_id"]').last().val();

    var mData = 'date=' + getLastTimeEntryDate()
      + '&issue_id=' + issue_id
      + '&hours=' + hours
      + '&activity_id=' + activity_id
      + '&project_id=' + project_id;

    $.ajax({
      complete: function(request){},
      data: mData,
      type: 'put',
      url: '/add_entry'
    });
  });
}

$(document).ready(setLinkParams);
