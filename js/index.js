
function init() {
  state = StateService.load();

  if (!state) {
    showInputForm();
  }
  else {
    hideInputForm();
  }
}


function showInputForm() {
  document.getElementById('inputForm').removeAttribute('display');
  
  document.getElementById('startBudget').addEventListener("click", function (e) {
    e.preventDefault();
    
    var goal = document.getElementById('goal').value;
    var date = moment(document.getElementById('date').value);

    var wallet = new Wallet({ 
      duration: date.diff(moment(), "days"), 
      container: "screwed", 
      goal: goal 
    });
    
    StateService.saveWallet(wallet, function() {
      hideInputForm();
    });
  });
}

function hideInputForm() {
  document.getElementById('inputForm').attributes['display'] = 'none';
}

init();