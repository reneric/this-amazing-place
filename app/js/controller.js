function Nav($scope) {
  $scope.pages = [
    {"name": "This Amazing Event",
      "div": "event",
      "scroll": "container",
      "layout": "partials/events.html"},
    {"name": "This Amazing Need",
      "div": "need",
      "scroll": "need",
      "layout": "partials/need.html"},
    {"name": "Get Involved",
      "div": "involved",
      "scroll": "involved",
      "layout": "partials/involved.html"},
    {"name": "Purchase Tickets",
      "div": "involved",
      "scroll": "involved",
      "layout": "partials/tickets.html"},
    {"name": "Sponsor",
      "div": "involved",
      "scroll": "involved",
      "layout": "partials/sponsor.html"},
    ];
  $scope.selectedIndex = 0;
   $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
    // $location.hash(id);
    // $anchorScroll();
  };
  $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
}

function Pages($scope) {
  $scope.pages = [
    {"name": "This Amazing Event",
      "div": "event",
      "bg": "",
      "rel": "",
      "layout": "partials/events.html"},
    {"name": "This Amazing Need",
      "div": "need",
      "rel": "bg",
      "bg": "img/need.webp",
      "layout": "partials/need.html"},
    {"name": "Get Involved",
      "div": "involved",
      "rel": "bg",
      "bg": "img/involved.webp",
      "layout": "partials/involved.html"},
    {"name": "Last Year&apos;s Event",
      "div": "gallery",
      "rel": "",
      "bg": "",
      "layout": "partials/gallery.html"}  
    ];
  $scope.selectedIndex = 0;
   $scope.itemClicked = function ($index) {
    $scope.selectedIndex = $index;
    // $location.hash(id);
    // $anchorScroll();
  };
  $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }
}



/* Controllers */

function MainCtrl($scope, Page) {
    console.log(Page);
    $scope.page= Page; 
}

function HomeCtrl($scope, Page) {
    Page.setTitle("Welcome");
}


function ListCtrl($scope, Page, Model) {
    Page.setTitle("Items");
    $scope.items = Model.notes();

}

function DetailCtrl($scope, Page, Model, $routeParams, $location) {
    Page.setTitle("Detail");
    var id = $scope.itemId = $routeParams.itemId;
    $scope.item = Model.get(id);
}

function SettingsCtrl($scope, Page) {
    Page.setTitle("Settings");
}

/* Services */

