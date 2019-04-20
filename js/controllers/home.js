'use strict'
angular.module('homeControllers', [])
  .controller('homeCtrl', ['$scope', '$rootScope', '$routeParams', 'myApi', function ($scope, $rootScope, $routeParams, myApi) {
    $scope.featured = [
      {
        'id': 1,
        'title': "Pope's Orders",
        'content': 'Documents released by WikiLeaks today shed light on a power struggle within the highest offices of the Catholic Church. Amongst the documents is a private letter written by Pope Francis. The existence of this letter, addressed to the papal envoy Cardinal Raymond Burke, has been the source of much speculation in the media [1]. It is now published for the first time in full and with the Pope’s signature.',
        'assets': '',
        'date': new Date
      },
      {
        'id': 2,
        'title': 'Amazon Atlas',
        'content': "Today, 11 October 2018, WikiLeaks publishes a 'Highly Confidential' internal document from the cloud computing provider Amazon. The document from late 2015 lists the addresses and some operational details of over one hundred data centers spread across fifteen cities in nine countries. To accompany this document, WikiLeaks also created a map showing where Amazon’s data centers are located",
        'assets': '',
        'date': new Date
      },
      {
        'id': 3,
        'title': 'Dealmaker',
        'content': 'Today WikiLeaks publishes a secret document from the International Chamber of Commerce (ICC) International Court of Arbitration, pertaining to a dispute over commission payment in relation to a $3.6 billion arms deal between French state-owned company GIAT Industries SA (now Nexter Systems) and the United Arab Emirates (UAE). The agreement was for the sale of 388 Leclerc combat tanks, 46 armoured vehicles, 2 training tanks, spare parts and ammunition. It was signed in 1993 and scheduled to be completed in 2008.',
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      {
        'id': 4,
        'title': 'Spy Files Russia',
        'content': "This publication continues WikiLeaks' Spy Files series with releases about surveillance contractors in Russia.",
        'assets': '',
        'date': new Date
      },
      
    ];
  }])