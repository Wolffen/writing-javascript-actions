const data = {
  "servicingDealerCoordinates": {
    "latitude": 38.3166941,
    "longitude": -88.9068045
  },
  "identifier": "D649451",
  "assetLocationTimezone": "America/Chicago",
  "lastUpdatedAt": "2021-08-13T12:05:30.252Z",
  "servicingDealerTimezone": "America/Chicago",
  "authorizations": [
    {
      "authorizationClass": "woNumber",
      "number": "OON-13AUG21-9451"
    },
    {
      "authorizationClass": "poNumber",
      "number": "D649451"
    }
  ],
  "firstClosedAt": "2021-08-13T12:05:00Z",
  "lastUpdated": "2021-08-13T12:05:03Z",
  "unifiedHistory": [
    {
      "node": {
        "createdAt": "2021-08-13T12:05:03Z",
        "newStatus": "CLOSED",
        "oldStatus": "ROLLING",
        "setManually": "TRUE",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T12:05:00Z",
        "id": "11d2b913-15b3-4ee3-8ad9-cf085f1f45f4",
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-20T19:15:49Z",
          "id": "b08fc338-4cb7-b4bc-801b-b5906e7de583",
          "userName": "Internal OnCall User",
          "email": "oncall.autoclose@eagleteleservices.biz",
          "updatedAt": "2019-04-23T03:08:54Z"
        }
      }
    },
    {
      "node": {
        "caseEmailType": "ROLLING",
        "recipientsEmails": [
          "tires@pgttrucking.com",
          "rhoxit@pgttrucking.com"
        ],
        "insertedAt": "2021-08-13T12:04:56Z",
        "caseId": "fb950416-53dc-45be-b188-d10b7181ad3b",
        "__typename": "CaseEmail",
        "id": "06cb0c46-f92a-4398-a4cd-2ebc03e9dd70",
        "userId": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        },
        "case": null,
        "updatedAt": "2021-08-13T12:04:56Z"
      }
    },
    {
      "node": {
        "createdAt": "2021-08-13T12:04:56Z",
        "newStatus": "ROLLING",
        "oldStatus": "ARRIVED",
        "setManually": "TRUE",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T12:04:54Z",
        "id": "91aff7d8-d2c4-484a-b690-93d0be0926d9",
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T12:04:56Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "91aff7d8-d2c4-484a-b690-93d0be0926d9",
            "fields": [
              {
                "newValue": "2021-08-13T12:04:54Z",
                "field": "rolling_at",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T12:04:55Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "SUPPLIED_LINE",
            "action": "CREATED",
            "entityId": "a4f958f8-972d-43a6-8c11-53a6b53de0a2",
            "fields": [
              {
                "newValue": "TRUE",
                "field": "supplied",
                "previousValue": null
              },
              {
                "newValue": "1536576PLA",
                "field": "unit_number",
                "previousValue": null
              },
              {
                "newValue": "275/80R22.5",
                "field": "tire_size",
                "previousValue": null
              },
              {
                "newValue": "RFO",
                "field": "tire_position",
                "previousValue": null
              },
              {
                "newValue": "FLAT_SPOTTED",
                "field": "tire_condition",
                "previousValue": null
              },
              {
                "newValue": "X Multi Energy Z",
                "field": "sculpture_tread_name",
                "previousValue": null
              },
              {
                "newValue": "REPLACE",
                "field": "requested_action",
                "previousValue": null
              },
              {
                "newValue": "Replaced with new tire",
                "field": "provided_service",
                "previousValue": null
              },
              {
                "newValue": "New",
                "field": "product_type",
                "previousValue": null
              },
              {
                "newValue": "Michelin",
                "field": "manufacturer_full_name",
                "previousValue": null
              },
              {
                "newValue": "H",
                "field": "load_range",
                "previousValue": null
              },
              {
                "newValue": "TRAILER",
                "field": "axle_type",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "agreed_line_id",
                "value": "4fc7aba3-40a3-4d65-9fb6-7c91bf134b4d"
              },
              {
                "name": "request_line_id",
                "value": "fab97736-7079-409b-9fea-fa95cd50fa6a"
              }
            ]
          }
        ],
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T12:04:55Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "SUPPLIED_LINE",
            "action": "CREATED",
            "entityId": "a1925fb9-f733-4930-8fad-9e875457bdb5",
            "fields": [
              {
                "newValue": "TRUE",
                "field": "supplied",
                "previousValue": null
              },
              {
                "newValue": "1536576PLA",
                "field": "unit_number",
                "previousValue": null
              },
              {
                "newValue": "275/80R22.5",
                "field": "tire_size",
                "previousValue": null
              },
              {
                "newValue": "RFI",
                "field": "tire_position",
                "previousValue": null
              },
              {
                "newValue": "FLAT_SPOTTED",
                "field": "tire_condition",
                "previousValue": null
              },
              {
                "newValue": "X Multi Energy Z",
                "field": "sculpture_tread_name",
                "previousValue": null
              },
              {
                "newValue": "REPLACE",
                "field": "requested_action",
                "previousValue": null
              },
              {
                "newValue": "Replaced with new tire",
                "field": "provided_service",
                "previousValue": null
              },
              {
                "newValue": "New",
                "field": "product_type",
                "previousValue": null
              },
              {
                "newValue": "Michelin",
                "field": "manufacturer_full_name",
                "previousValue": null
              },
              {
                "newValue": "H",
                "field": "load_range",
                "previousValue": null
              },
              {
                "newValue": "TRAILER",
                "field": "axle_type",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "agreed_line_id",
                "value": "487867d6-5b4a-40c8-b2ff-ce499ea56c18"
              },
              {
                "name": "request_line_id",
                "value": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6"
              }
            ]
          }
        ],
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T12:04:54Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "BILLING",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "OON-13AUG21-9451",
                "field": "wo_number",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T12:04:54Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "SUPPLIED_LINE",
            "action": "DELETED",
            "entityId": "727cec69-f12b-4422-8b8f-d0d1ccf8d0e8",
            "fields": [
              {
                "newValue": null,
                "field": "unit_number",
                "previousValue": "1536576PLA"
              },
              {
                "newValue": null,
                "field": "tire_size",
                "previousValue": "275/80R22.5"
              },
              {
                "newValue": null,
                "field": "tire_position",
                "previousValue": "RFO"
              },
              {
                "newValue": null,
                "field": "tire_condition",
                "previousValue": "FLAT_SPOTTED"
              },
              {
                "newValue": null,
                "field": "sculpture_tread_name",
                "previousValue": "XZE2+"
              },
              {
                "newValue": null,
                "field": "requested_action",
                "previousValue": "REPLACE"
              },
              {
                "newValue": null,
                "field": "product_type",
                "previousValue": "New"
              },
              {
                "newValue": null,
                "field": "manufacturer_full_name",
                "previousValue": "Michelin"
              },
              {
                "newValue": null,
                "field": "load_range",
                "previousValue": "NA"
              },
              {
                "newValue": null,
                "field": "axle_type",
                "previousValue": "TRAILER"
              }
            ],
            "info": [
              {
                "name": "agreed_line_id",
                "value": "4fc7aba3-40a3-4d65-9fb6-7c91bf134b4d"
              },
              {
                "name": "request_line_id",
                "value": "fab97736-7079-409b-9fea-fa95cd50fa6a"
              }
            ]
          }
        ],
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T12:04:54Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "SUPPLIED_LINE",
            "action": "DELETED",
            "entityId": "621ccd92-4e1d-4c8e-b30a-daa22924dc20",
            "fields": [
              {
                "newValue": null,
                "field": "unit_number",
                "previousValue": "1536576PLA"
              },
              {
                "newValue": null,
                "field": "tire_size",
                "previousValue": "275/80R22.5"
              },
              {
                "newValue": null,
                "field": "tire_position",
                "previousValue": "RFI"
              },
              {
                "newValue": null,
                "field": "tire_condition",
                "previousValue": "FLAT_SPOTTED"
              },
              {
                "newValue": null,
                "field": "sculpture_tread_name",
                "previousValue": "XZE2+"
              },
              {
                "newValue": null,
                "field": "requested_action",
                "previousValue": "REPLACE"
              },
              {
                "newValue": null,
                "field": "product_type",
                "previousValue": "New"
              },
              {
                "newValue": null,
                "field": "manufacturer_full_name",
                "previousValue": "Michelin"
              },
              {
                "newValue": null,
                "field": "load_range",
                "previousValue": "NA"
              },
              {
                "newValue": null,
                "field": "axle_type",
                "previousValue": "TRAILER"
              }
            ],
            "info": [
              {
                "name": "agreed_line_id",
                "value": "487867d6-5b4a-40c8-b2ff-ce499ea56c18"
              },
              {
                "name": "request_line_id",
                "value": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6"
              }
            ]
          }
        ],
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "createdAt": "2021-08-13T11:31:25Z",
        "newStatus": "ARRIVED",
        "oldStatus": "EN_ROUTE",
        "setManually": "FALSE",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T11:31:24Z",
        "id": "c8b92176-3511-41df-8a22-767e6f9567ca",
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "createdAt": "2021-08-13T11:13:55Z",
        "newStatus": "EN_ROUTE",
        "oldStatus": "DISPATCHED",
        "setManually": "FALSE",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T11:13:53Z",
        "id": "d359233f-1f17-431d-b1ba-74976be6345a",
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:13:55Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "FALSE",
                "field": "is_delayed_service",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-29T17:36:19Z",
          "id": "ca9b1c87-a4fc-4653-b687-81746da0f27a",
          "userName": "Rest API Fixpix user",
          "email": "rest-api:fixpix-misp-prod@gmail.com",
          "updatedAt": "2019-03-29T17:36:19Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:04:17Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": null,
                "field": "assigned_to_user_name",
                "previousValue": "jacquelyn.noey"
              },
              {
                "newValue": null,
                "field": "assigned_to_email",
                "previousValue": "jacquelyn.noey@eagleteleservices.biz"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "callAttributes": "{\"type\":\"eta\",\"status\":\"success\",\"id\":\"22599f7d-3f96-4c0c-914c-5687fa841f7f\",\"contact_type\":\"driver_cell\",\"contact_phone_number\":\"+13185709119\",\"contact_phone_extension\":null,\"contact_name\":\"Sabian Harris\",\"call_message\":\"Hello. This is an update from Michelin Oncall for case number D649451. Our servicing dealer, PURCELL TIRE & RUBBER COMPANY, have been dispatched to your Trailer number, 1536576PLA, in Mount Vernon, Illinois. The dealer advises an estimated time of arrival between 45 and 60 minutes from the time of this message. To hear these details again, please select 1, or to call Michelin Oncall and talk to an agent, please select 2.\"}",
        "recordedAt": "2021-08-13T11:04:09Z",
        "id": "68025622",
        "user": {
          "lastName": null,
          "firstName": null,
          "insertedAt": "2019-03-20T19:15:49Z",
          "id": "b08fc338-4cb7-b4bc-801b-b5906e7de583",
          "userName": "Internal OnCall User",
          "email": "oncall.autoclose@eagleteleservices.biz",
          "updatedAt": "2019-04-23T03:08:54Z"
        }
      }
    },
    {
      "node": {
        "caseEmailType": "DISPATCHED",
        "recipientsEmails": [
          "jdelwich@pgttrucking.com",
          "tires@pgttrucking.com",
          "rhoxit@pgttrucking.com",
          "breakdown@pgttrucking.com"
        ],
        "insertedAt": "2021-08-13T11:03:49Z",
        "caseId": "fb950416-53dc-45be-b188-d10b7181ad3b",
        "__typename": "CaseEmail",
        "id": "210ae278-c28b-40a5-a288-47dd4d5c186c",
        "userId": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        },
        "case": null,
        "updatedAt": "2021-08-13T11:03:49Z"
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:03:49Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DISPATCHED_STATUS_CONDITIONS",
            "action": "CREATED",
            "entityId": "dcbfc896-0053-4c81-a118-4e9f2db53bc6",
            "fields": [
              {
                "newValue": "5268",
                "field": "travel_estimate_distance_m",
                "previousValue": null
              },
              {
                "newValue": "611",
                "field": "travel_estimate_time_s",
                "previousValue": null
              },
              {
                "newValue": "America/Chicago",
                "field": "weather_forecast_timezone",
                "previousValue": null
              },
              {
                "newValue": "1628851228",
                "field": "weather_forecast_current_time_s",
                "previousValue": null
              },
              {
                "newValue": "69.93",
                "field": "weather_forecast_current_temperature_f",
                "previousValue": null
              },
              {
                "newValue": "Clear",
                "field": "weather_forecast_current_precip_type",
                "previousValue": null
              },
              {
                "newValue": "225",
                "field": "weather_forecast_current_wind_bearing_d",
                "previousValue": null
              },
              {
                "newValue": "1.99",
                "field": "weather_forecast_current_wind_speed_mph",
                "previousValue": null
              },
              {
                "newValue": "clear sky",
                "field": "weather_forecast_current_summary",
                "previousValue": null
              },
              {
                "newValue": "1628877600",
                "field": "weather_forecast_today_time_s",
                "previousValue": null
              },
              {
                "newValue": "86.54",
                "field": "weather_forecast_today_temperature_high_f",
                "previousValue": null
              },
              {
                "newValue": "68.59",
                "field": "weather_forecast_today_temperature_low_f",
                "previousValue": null
              },
              {
                "newValue": "1",
                "field": "weather_forecast_today_precip_probability",
                "previousValue": null
              },
              {
                "newValue": "Rain",
                "field": "weather_forecast_today_precip_type",
                "previousValue": null
              },
              {
                "newValue": "267",
                "field": "weather_forecast_today_wind_bearing_d",
                "previousValue": null
              },
              {
                "newValue": "11.92",
                "field": "weather_forecast_today_wind_speed_mph",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "createdAt": "2021-08-13T11:03:48Z",
        "newStatus": "DISPATCHED",
        "oldStatus": "DISPATCH",
        "setManually": "FALSE",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T11:03:47Z",
        "id": "6214ac12-e08a-4975-8edb-cd3696a7e4c2",
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:03:48Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [],
            "info": []
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:03:48Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DEALER_RESPONSE",
            "action": "UPDATED",
            "entityId": "bf8b3521-28eb-4729-a0eb-5787380acba1",
            "fields": [],
            "info": [
              {
                "name": "custom_dealer",
                "value": "false"
              },
              {
                "name": "dealer_address",
                "value": "1212 BROADWAY"
              },
              {
                "name": "dealer_bill_to",
                "value": "1002519"
              },
              {
                "name": "dealer_city",
                "value": "MOUNT VERNON"
              },
              {
                "name": "dealer_country",
                "value": "US"
              },
              {
                "name": "dealer_id",
                "value": "274a2eb6-6bcb-4f64-91ff-c984718275a3"
              },
              {
                "name": "dealer_name",
                "value": "PURCELL TIRE & RUBBER COMPANY"
              },
              {
                "name": "dealer_ship_to",
                "value": "1403191"
              },
              {
                "name": "dealer_state",
                "value": "IL"
              },
              {
                "name": "dealer_zip",
                "value": "62864"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:03:48Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "SUCCESS",
                "field": "fixpix_push_result",
                "previousValue": "NOT_ATTEMPTED"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:03:44Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "AGREEMENT_LINE",
            "action": "UPDATED",
            "entityId": "4fc7aba3-40a3-4d65-9fb6-7c91bf134b4d",
            "fields": [
              {
                "newValue": "TRUE",
                "field": "agreed",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "request_line_id",
                "value": "fab97736-7079-409b-9fea-fa95cd50fa6a"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:03:43Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "AGREEMENT_LINE",
            "action": "UPDATED",
            "entityId": "487867d6-5b4a-40c8-b2ff-ce499ea56c18",
            "fields": [
              {
                "newValue": "TRUE",
                "field": "agreed",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "request_line_id",
                "value": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:03:41Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DEALER_RESPONSE",
            "action": "UPDATED",
            "entityId": "bf8b3521-28eb-4729-a0eb-5787380acba1",
            "fields": [
              {
                "newValue": "45",
                "field": "eta_min_minutes",
                "previousValue": "60"
              },
              {
                "newValue": "60",
                "field": "eta_max_minutes",
                "previousValue": "90"
              }
            ],
            "info": [
              {
                "name": "custom_dealer",
                "value": "false"
              },
              {
                "name": "dealer_address",
                "value": "1212 BROADWAY"
              },
              {
                "name": "dealer_bill_to",
                "value": "1002519"
              },
              {
                "name": "dealer_city",
                "value": "MOUNT VERNON"
              },
              {
                "name": "dealer_country",
                "value": "US"
              },
              {
                "name": "dealer_id",
                "value": "274a2eb6-6bcb-4f64-91ff-c984718275a3"
              },
              {
                "name": "dealer_name",
                "value": "PURCELL TIRE & RUBBER COMPANY"
              },
              {
                "name": "dealer_ship_to",
                "value": "1403191"
              },
              {
                "name": "dealer_state",
                "value": "IL"
              },
              {
                "name": "dealer_zip",
                "value": "62864"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:02:41Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DEALER_RESPONSE",
            "action": "UPDATED",
            "entityId": "bf8b3521-28eb-4729-a0eb-5787380acba1",
            "fields": [
              {
                "newValue": "60",
                "field": "eta_min_minutes",
                "previousValue": null
              },
              {
                "newValue": "90",
                "field": "eta_max_minutes",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "custom_dealer",
                "value": "false"
              },
              {
                "name": "dealer_address",
                "value": "1212 BROADWAY"
              },
              {
                "name": "dealer_bill_to",
                "value": "1002519"
              },
              {
                "name": "dealer_city",
                "value": "MOUNT VERNON"
              },
              {
                "name": "dealer_country",
                "value": "US"
              },
              {
                "name": "dealer_id",
                "value": "274a2eb6-6bcb-4f64-91ff-c984718275a3"
              },
              {
                "name": "dealer_name",
                "value": "PURCELL TIRE & RUBBER COMPANY"
              },
              {
                "name": "dealer_ship_to",
                "value": "1403191"
              },
              {
                "name": "dealer_state",
                "value": "IL"
              },
              {
                "name": "dealer_zip",
                "value": "62864"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:02:39Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DEALER_RESPONSE",
            "action": "UPDATED",
            "entityId": "bf8b3521-28eb-4729-a0eb-5787380acba1",
            "fields": [
              {
                "newValue": "Accepted",
                "field": "reason",
                "previousValue": null
              },
              {
                "newValue": "TRUE",
                "field": "accepted",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "custom_dealer",
                "value": "false"
              },
              {
                "name": "dealer_address",
                "value": "1212 BROADWAY"
              },
              {
                "name": "dealer_bill_to",
                "value": "1002519"
              },
              {
                "name": "dealer_city",
                "value": "MOUNT VERNON"
              },
              {
                "name": "dealer_country",
                "value": "US"
              },
              {
                "name": "dealer_id",
                "value": "274a2eb6-6bcb-4f64-91ff-c984718275a3"
              },
              {
                "name": "dealer_name",
                "value": "PURCELL TIRE & RUBBER COMPANY"
              },
              {
                "name": "dealer_ship_to",
                "value": "1403191"
              },
              {
                "name": "dealer_state",
                "value": "IL"
              },
              {
                "name": "dealer_zip",
                "value": "62864"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T11:01:27Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": null,
                "field": "quick_note",
                "previousValue": "Call Purcell Mt Vernon primary @ 6:48am"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "__typename": "CaseCall",
        "sourceNumber": null,
        "userId": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
        "amazonConnectContactId": "31e34fd0-e49f-4947-8da1-4aa34cf2cadd",
        "destinationNumber": "+16183153384",
        "insertedAt": "2021-08-13T10:58:31Z",
        "destinationName": "Billy Minor",
        "caseId": "fb950416-53dc-45be-b188-d10b7181ad3b",
        "sourceOrganization": "Michelin OnCall",
        "startTime": "2021-08-13T10:58:31Z",
        "sourceName": "Jacquelyn Noey",
        "id": "7f4e5190-e8bd-4a41-853f-a494ee234753",
        "destinationOrganization": "PURCELL TIRE & RUBBER COMPANY",
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        },
        "updatedAt": "2021-08-13T10:58:31Z",
        "direction": "OUTBOUND"
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:58:30Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DELAY",
            "action": "UPDATED",
            "entityId": "087aab2a-15b3-4d53-8ac5-314470098248",
            "fields": [
              {
                "newValue": "2021-08-13T10:58:30Z",
                "field": "end_time",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "custom_reason",
                "value": null
              },
              {
                "name": "end_time",
                "value": null
              },
              {
                "name": "reason_type",
                "value": "checking_tire_inventory"
              },
              {
                "name": "start_time",
                "value": "2021-08-13T10:42:44.319797Z"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:58:30Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DEALER_RESPONSE",
            "action": "CREATED",
            "entityId": "bf8b3521-28eb-4729-a0eb-5787380acba1",
            "fields": [
              {
                "newValue": "62864",
                "field": "dealer_zip",
                "previousValue": null
              },
              {
                "newValue": "IL",
                "field": "dealer_state",
                "previousValue": null
              },
              {
                "newValue": "1403191",
                "field": "dealer_ship_to",
                "previousValue": null
              },
              {
                "newValue": "PURCELL TIRE & RUBBER COMPANY",
                "field": "dealer_name",
                "previousValue": null
              },
              {
                "newValue": "US",
                "field": "dealer_country",
                "previousValue": null
              },
              {
                "newValue": "MOUNT VERNON",
                "field": "dealer_city",
                "previousValue": null
              },
              {
                "newValue": "1002519",
                "field": "dealer_bill_to",
                "previousValue": null
              },
              {
                "newValue": "1212 BROADWAY",
                "field": "dealer_address",
                "previousValue": null
              },
              {
                "newValue": "2021-08-13T10:58:30Z",
                "field": "response_time",
                "previousValue": null
              },
              {
                "newValue": "+16183153384",
                "field": "phone_number",
                "previousValue": null
              },
              {
                "newValue": "Billy Minor",
                "field": "contact_person",
                "previousValue": null
              },
              {
                "newValue": "9 min",
                "field": "asset_location_drive_time",
                "previousValue": null
              },
              {
                "newValue": "3.1677503380259284",
                "field": "asset_location_drive_distance",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "custom_dealer",
                "value": "false"
              },
              {
                "name": "dealer_address",
                "value": "1212 BROADWAY"
              },
              {
                "name": "dealer_bill_to",
                "value": "1002519"
              },
              {
                "name": "dealer_city",
                "value": "MOUNT VERNON"
              },
              {
                "name": "dealer_country",
                "value": "US"
              },
              {
                "name": "dealer_id",
                "value": "274a2eb6-6bcb-4f64-91ff-c984718275a3"
              },
              {
                "name": "dealer_name",
                "value": "PURCELL TIRE & RUBBER COMPANY"
              },
              {
                "name": "dealer_ship_to",
                "value": "1403191"
              },
              {
                "name": "dealer_state",
                "value": "IL"
              },
              {
                "name": "dealer_zip",
                "value": "62864"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:58:20Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "jacquelyn.noey",
                "field": "assigned_to_user_name",
                "previousValue": null
              },
              {
                "newValue": "jacquelyn.noey@eagleteleservices.biz",
                "field": "assigned_to_email",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Noey",
          "firstName": "Jacquelyn",
          "insertedAt": "2019-05-01T03:48:57Z",
          "id": "5c6aac5e-817f-4a4a-af94-05ca0c704a5b",
          "userName": "jacquelyn.noey",
          "email": "jacquelyn.noey@eagleteleservices.biz",
          "updatedAt": "2019-05-01T03:48:57Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:43:15Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": null,
                "field": "assigned_to_user_name",
                "previousValue": "jonathan.mejia"
              },
              {
                "newValue": null,
                "field": "assigned_to_email",
                "previousValue": "jonathan.mejia@eagleteleservices.biz"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Mejia",
          "firstName": "Jon",
          "insertedAt": "2019-04-22T12:58:10Z",
          "id": "6762b566-f6a1-472a-954a-b8456874c15e",
          "userName": "jonathan.mejia",
          "email": "jonathan.mejia@eagleteleservices.biz",
          "updatedAt": "2019-04-22T12:58:10Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:43:14Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "Call Purcell Mt Vernon primary @ 6:48am",
                "field": "quick_note",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Mejia",
          "firstName": "Jon",
          "insertedAt": "2019-04-22T12:58:10Z",
          "id": "6762b566-f6a1-472a-954a-b8456874c15e",
          "userName": "jonathan.mejia",
          "email": "jonathan.mejia@eagleteleservices.biz",
          "updatedAt": "2019-04-22T12:58:10Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:42:44Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DELAY",
            "action": "CREATED",
            "entityId": "087aab2a-15b3-4d53-8ac5-314470098248",
            "fields": [
              {
                "newValue": "DISPATCH",
                "field": "status",
                "previousValue": null
              },
              {
                "newValue": "2021-08-13T10:42:44Z",
                "field": "start_time",
                "previousValue": null
              },
              {
                "newValue": "CHECKING_TIRE_INVENTORY",
                "field": "reason_type",
                "previousValue": null
              },
              {
                "newValue": "2b0cc372-a7c0-4f05-8609-9bf846f1d196",
                "field": "dealer_response_id",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "custom_reason",
                "value": null
              },
              {
                "name": "end_time",
                "value": null
              },
              {
                "name": "reason_type",
                "value": "checking_tire_inventory"
              },
              {
                "name": "start_time",
                "value": "2021-08-13T10:42:44.319797Z"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Mejia",
          "firstName": "Jon",
          "insertedAt": "2019-04-22T12:58:10Z",
          "id": "6762b566-f6a1-472a-954a-b8456874c15e",
          "userName": "jonathan.mejia",
          "email": "jonathan.mejia@eagleteleservices.biz",
          "updatedAt": "2019-04-22T12:58:10Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:42:44Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DEALER_RESPONSE",
            "action": "UPDATED",
            "entityId": "2b0cc372-a7c0-4f05-8609-9bf846f1d196",
            "fields": [
              {
                "newValue": "Checking Tire Availability",
                "field": "reason",
                "previousValue": null
              },
              {
                "newValue": "FALSE",
                "field": "accepted",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "custom_dealer",
                "value": "false"
              },
              {
                "name": "dealer_address",
                "value": "1212 BROADWAY"
              },
              {
                "name": "dealer_bill_to",
                "value": "1002519"
              },
              {
                "name": "dealer_city",
                "value": "MOUNT VERNON"
              },
              {
                "name": "dealer_country",
                "value": "US"
              },
              {
                "name": "dealer_id",
                "value": "274a2eb6-6bcb-4f64-91ff-c984718275a3"
              },
              {
                "name": "dealer_name",
                "value": "PURCELL TIRE & RUBBER COMPANY"
              },
              {
                "name": "dealer_ship_to",
                "value": "1403191"
              },
              {
                "name": "dealer_state",
                "value": "IL"
              },
              {
                "name": "dealer_zip",
                "value": "62864"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Mejia",
          "firstName": "Jon",
          "insertedAt": "2019-04-22T12:58:10Z",
          "id": "6762b566-f6a1-472a-954a-b8456874c15e",
          "userName": "jonathan.mejia",
          "email": "jonathan.mejia@eagleteleservices.biz",
          "updatedAt": "2019-04-22T12:58:10Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:42:39Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DEALER_RESPONSE",
            "action": "UPDATED",
            "entityId": "2b0cc372-a7c0-4f05-8609-9bf846f1d196",
            "fields": [
              {
                "newValue": "heading to shop now - call him back in 5min",
                "field": "note",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "custom_dealer",
                "value": "false"
              },
              {
                "name": "dealer_address",
                "value": "1212 BROADWAY"
              },
              {
                "name": "dealer_bill_to",
                "value": "1002519"
              },
              {
                "name": "dealer_city",
                "value": "MOUNT VERNON"
              },
              {
                "name": "dealer_country",
                "value": "US"
              },
              {
                "name": "dealer_id",
                "value": "274a2eb6-6bcb-4f64-91ff-c984718275a3"
              },
              {
                "name": "dealer_name",
                "value": "PURCELL TIRE & RUBBER COMPANY"
              },
              {
                "name": "dealer_ship_to",
                "value": "1403191"
              },
              {
                "name": "dealer_state",
                "value": "IL"
              },
              {
                "name": "dealer_zip",
                "value": "62864"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Mejia",
          "firstName": "Jon",
          "insertedAt": "2019-04-22T12:58:10Z",
          "id": "6762b566-f6a1-472a-954a-b8456874c15e",
          "userName": "jonathan.mejia",
          "email": "jonathan.mejia@eagleteleservices.biz",
          "updatedAt": "2019-04-22T12:58:10Z"
        }
      }
    },
    {
      "node": {
        "__typename": "CaseCall",
        "sourceNumber": null,
        "userId": "6762b566-f6a1-472a-954a-b8456874c15e",
        "amazonConnectContactId": "6d2f8281-5393-4798-8bb5-1c0a4e646195",
        "destinationNumber": "+16183153384",
        "insertedAt": "2021-08-13T10:41:48Z",
        "destinationName": "Billy Minor",
        "caseId": "fb950416-53dc-45be-b188-d10b7181ad3b",
        "sourceOrganization": "Michelin OnCall",
        "startTime": "2021-08-13T10:41:48Z",
        "sourceName": "Jon Mejia",
        "id": "83b6e8e7-8be9-4dbb-bf9b-3758ef43bd57",
        "destinationOrganization": "PURCELL TIRE & RUBBER COMPANY",
        "user": {
          "lastName": "Mejia",
          "firstName": "Jon",
          "insertedAt": "2019-04-22T12:58:10Z",
          "id": "6762b566-f6a1-472a-954a-b8456874c15e",
          "userName": "jonathan.mejia",
          "email": "jonathan.mejia@eagleteleservices.biz",
          "updatedAt": "2019-04-22T12:58:10Z"
        },
        "updatedAt": "2021-08-13T10:41:48Z",
        "direction": "OUTBOUND"
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:41:48Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "DEALER_RESPONSE",
            "action": "CREATED",
            "entityId": "2b0cc372-a7c0-4f05-8609-9bf846f1d196",
            "fields": [
              {
                "newValue": "62864",
                "field": "dealer_zip",
                "previousValue": null
              },
              {
                "newValue": "IL",
                "field": "dealer_state",
                "previousValue": null
              },
              {
                "newValue": "1403191",
                "field": "dealer_ship_to",
                "previousValue": null
              },
              {
                "newValue": "PURCELL TIRE & RUBBER COMPANY",
                "field": "dealer_name",
                "previousValue": null
              },
              {
                "newValue": "US",
                "field": "dealer_country",
                "previousValue": null
              },
              {
                "newValue": "MOUNT VERNON",
                "field": "dealer_city",
                "previousValue": null
              },
              {
                "newValue": "1002519",
                "field": "dealer_bill_to",
                "previousValue": null
              },
              {
                "newValue": "1212 BROADWAY",
                "field": "dealer_address",
                "previousValue": null
              },
              {
                "newValue": "2021-08-13T10:41:48Z",
                "field": "response_time",
                "previousValue": null
              },
              {
                "newValue": "+16183153384",
                "field": "phone_number",
                "previousValue": null
              },
              {
                "newValue": "Billy Minor",
                "field": "contact_person",
                "previousValue": null
              },
              {
                "newValue": "9 min",
                "field": "asset_location_drive_time",
                "previousValue": null
              },
              {
                "newValue": "3.1677503380259284",
                "field": "asset_location_drive_distance",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "custom_dealer",
                "value": "false"
              },
              {
                "name": "dealer_address",
                "value": "1212 BROADWAY"
              },
              {
                "name": "dealer_bill_to",
                "value": "1002519"
              },
              {
                "name": "dealer_city",
                "value": "MOUNT VERNON"
              },
              {
                "name": "dealer_country",
                "value": "US"
              },
              {
                "name": "dealer_id",
                "value": "274a2eb6-6bcb-4f64-91ff-c984718275a3"
              },
              {
                "name": "dealer_name",
                "value": "PURCELL TIRE & RUBBER COMPANY"
              },
              {
                "name": "dealer_ship_to",
                "value": "1403191"
              },
              {
                "name": "dealer_state",
                "value": "IL"
              },
              {
                "name": "dealer_zip",
                "value": "62864"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Mejia",
          "firstName": "Jon",
          "insertedAt": "2019-04-22T12:58:10Z",
          "id": "6762b566-f6a1-472a-954a-b8456874c15e",
          "userName": "jonathan.mejia",
          "email": "jonathan.mejia@eagleteleservices.biz",
          "updatedAt": "2019-04-22T12:58:10Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:40:27Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "jonathan.mejia",
                "field": "assigned_to_user_name",
                "previousValue": null
              },
              {
                "newValue": "jonathan.mejia@eagleteleservices.biz",
                "field": "assigned_to_email",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Mejia",
          "firstName": "Jon",
          "insertedAt": "2019-04-22T12:58:10Z",
          "id": "6762b566-f6a1-472a-954a-b8456874c15e",
          "userName": "jonathan.mejia",
          "email": "jonathan.mejia@eagleteleservices.biz",
          "updatedAt": "2019-04-22T12:58:10Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:54Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": null,
                "field": "assigned_to_user_name",
                "previousValue": "peter.sturniolo"
              },
              {
                "newValue": null,
                "field": "assigned_to_email",
                "previousValue": "peter.sturniolo@eagleteleservices.biz"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:50Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "CASE_CONTACT",
            "action": "UPDATED",
            "entityId": "6473726d-2067-4571-a484-961f6ef96e4e",
            "fields": [
              {
                "newValue": "TRUE",
                "field": "callback_eta",
                "previousValue": "FALSE"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "createdAt": "2021-08-13T10:00:43Z",
        "newStatus": "DISPATCH",
        "oldStatus": "NEW",
        "setManually": "FALSE",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T10:00:43Z",
        "id": "f2d4d0a6-c9d3-44a8-807f-3a381e160ee7",
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:43Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "TRUE",
                "field": "billable",
                "previousValue": "FALSE"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:40Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "fab97736-7079-409b-9fea-fa95cd50fa6a",
            "fields": [
              {
                "newValue": "FLAT_SPOTTED",
                "field": "tire_condition",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:39Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "fab97736-7079-409b-9fea-fa95cd50fa6a",
            "fields": [
              {
                "newValue": "RFO",
                "field": "tire_position",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:36Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "SUPPLIED_LINE",
            "action": "CREATED",
            "entityId": "727cec69-f12b-4422-8b8f-d0d1ccf8d0e8",
            "fields": [
              {
                "newValue": "1536576PLA",
                "field": "unit_number",
                "previousValue": null
              },
              {
                "newValue": "275/80R22.5",
                "field": "tire_size",
                "previousValue": null
              },
              {
                "newValue": "XZE2+",
                "field": "sculpture_tread_name",
                "previousValue": null
              },
              {
                "newValue": "REPLACE",
                "field": "requested_action",
                "previousValue": null
              },
              {
                "newValue": "New",
                "field": "product_type",
                "previousValue": null
              },
              {
                "newValue": "Michelin",
                "field": "manufacturer_full_name",
                "previousValue": null
              },
              {
                "newValue": "NA",
                "field": "load_range",
                "previousValue": null
              },
              {
                "newValue": "TRAILER",
                "field": "axle_type",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "agreed_line_id",
                "value": "4fc7aba3-40a3-4d65-9fb6-7c91bf134b4d"
              },
              {
                "name": "request_line_id",
                "value": "fab97736-7079-409b-9fea-fa95cd50fa6a"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:36Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "AGREEMENT_LINE",
            "action": "CREATED",
            "entityId": "4fc7aba3-40a3-4d65-9fb6-7c91bf134b4d",
            "fields": [
              {
                "newValue": "1536576PLA",
                "field": "unit_number",
                "previousValue": null
              },
              {
                "newValue": "275/80R22.5",
                "field": "tire_size",
                "previousValue": null
              },
              {
                "newValue": "XZE2+",
                "field": "sculpture_tread_name",
                "previousValue": null
              },
              {
                "newValue": "REPLACE",
                "field": "requested_action",
                "previousValue": null
              },
              {
                "newValue": "New",
                "field": "product_type",
                "previousValue": null
              },
              {
                "newValue": "Michelin",
                "field": "manufacturer_full_name",
                "previousValue": null
              },
              {
                "newValue": "NA",
                "field": "load_range",
                "previousValue": null
              },
              {
                "newValue": "TRAILER",
                "field": "axle_type",
                "previousValue": null
              }
            ],
            "info": [
              {
                "name": "request_line_id",
                "value": "fab97736-7079-409b-9fea-fa95cd50fa6a"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:36Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "CREATED",
            "entityId": "fab97736-7079-409b-9fea-fa95cd50fa6a",
            "fields": [
              {
                "newValue": "1536576PLA",
                "field": "unit_number",
                "previousValue": null
              },
              {
                "newValue": "275/80R22.5",
                "field": "tire_size",
                "previousValue": null
              },
              {
                "newValue": "XZE2+",
                "field": "sculpture_tread_name",
                "previousValue": null
              },
              {
                "newValue": "REPLACE",
                "field": "requested_action",
                "previousValue": null
              },
              {
                "newValue": "New",
                "field": "product_type",
                "previousValue": null
              },
              {
                "newValue": "Michelin",
                "field": "manufacturer_full_name",
                "previousValue": null
              },
              {
                "newValue": "NA",
                "field": "load_range",
                "previousValue": null
              },
              {
                "newValue": "TRAILER",
                "field": "axle_type",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:27Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "NA",
                "field": "load_range",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:24Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "XZE2+",
                "field": "sculpture_tread_name",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:20Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "275/80R22.5",
                "field": "tire_size",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:16Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "Michelin",
                "field": "manufacturer_full_name",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T10:00:12Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "SPECIAL_INSTRUCTIONS",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "Trailer # 1536576PLA // RFI, RFO // Flat Spotted - No other damages reported // 295/75R22.5 // XZE2, XLEZ, XLET // Driver keeps off tires if able",
                "field": "special_instructions",
                "previousValue": "Trailer # 1536576PLA // RFI, RFO // Flat Spotted - No other damages reported // "
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:59:38Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "New",
                "field": "product_type",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:59:36Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "RFI",
                "field": "tire_position",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:59:27Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "TRAILER",
                "field": "axle_type",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:59:22Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "SPECIAL_INSTRUCTIONS",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "Trailer # 1536576PLA // RFI, RFO // Flat Spotted - No other damages reported // ",
                "field": "special_instructions",
                "previousValue": "Trailer # 1536576PLA // Flat Spotted - No other damages reported // "
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:59:13Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "FLAT_SPOTTED",
                "field": "tire_condition",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:59:09Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "REPLACE",
                "field": "requested_action",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:59:08Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "UPDATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [
              {
                "newValue": "1536576PLA",
                "field": "unit_number",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:59:07Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "SPECIAL_INSTRUCTIONS",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "Trailer # 1536576PLA // Flat Spotted - No other damages reported // ",
                "field": "special_instructions",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:58:43Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "CASE_CONTACT",
            "action": "UPDATED",
            "entityId": "9f8424a7-7652-4e4b-beba-ad0579cd75c6",
            "fields": [
              {
                "newValue": "DISPATCH",
                "field": "contact_type",
                "previousValue": "DRIVER_CELL"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:58:41Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "CASE_CONTACT",
            "action": "CREATED",
            "entityId": "9f8424a7-7652-4e4b-beba-ad0579cd75c6",
            "fields": [
              {
                "newValue": "+18557482013",
                "field": "phone",
                "previousValue": null
              },
              {
                "newValue": "Breakdown",
                "field": "name",
                "previousValue": null
              },
              {
                "newValue": "DRIVER_CELL",
                "field": "contact_type",
                "previousValue": null
              },
              {
                "newValue": "FALSE",
                "field": "callback_roll_time",
                "previousValue": null
              },
              {
                "newValue": "FALSE",
                "field": "callback_eta",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:58:32Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "RELATED_ASSET",
            "action": "UPDATED",
            "entityId": "10250d90-a680-4734-b810-7bb326f9e94f",
            "fields": [
              {
                "newValue": "19111",
                "field": "unit_number",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:58:26Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "RELATED_ASSET",
            "action": "CREATED",
            "entityId": "10250d90-a680-4734-b810-7bb326f9e94f",
            "fields": [
              {
                "newValue": "FALSE",
                "field": "dropped_unit",
                "previousValue": null
              },
              {
                "newValue": "TRACTOR",
                "field": "asset_type",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:58:23Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "PRIMARY_ASSET",
            "action": "UPDATED",
            "entityId": "e60c7ff9-4f99-4462-8bbf-517dd027916b",
            "fields": [
              {
                "newValue": "1536576PLA",
                "field": "unit_number",
                "previousValue": "1536576"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:58:20Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "BILLING",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "D649451",
                "field": "po_number",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:58:02Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "PRIMARY_ASSET",
            "action": "UPDATED",
            "entityId": "e60c7ff9-4f99-4462-8bbf-517dd027916b",
            "fields": [
              {
                "newValue": "1536576",
                "field": "unit_number",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:57:41Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "PRIMARY_ASSET",
            "action": "CREATED",
            "entityId": "e60c7ff9-4f99-4462-8bbf-517dd027916b",
            "fields": [
              {
                "newValue": "FALSE",
                "field": "dropped_unit",
                "previousValue": null
              },
              {
                "newValue": "TRAILER",
                "field": "asset_type",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:57:26Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "ASSET_LOCATION",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "America/Chicago",
                "field": "timezone",
                "previousValue": null
              },
              {
                "newValue": "4610 Broadway Street",
                "field": "street_address",
                "previousValue": null
              },
              {
                "newValue": "4610 Broadway St, Mt Vernon, IL 62864, USA",
                "field": "search_value",
                "previousValue": "pilot mt vernon "
              },
              {
                "newValue": "IL",
                "field": "province",
                "previousValue": null
              },
              {
                "newValue": "62864",
                "field": "postal_code",
                "previousValue": null
              },
              {
                "newValue": "US",
                "field": "country_code",
                "previousValue": null
              },
              {
                "newValue": "United States",
                "field": "country",
                "previousValue": null
              },
              {
                "newValue": "Lat 38.3123551 Long -88.960948",
                "field": "coordinates",
                "previousValue": null
              },
              {
                "newValue": "Mount Vernon",
                "field": "city",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:57:25Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "ASSET_LOCATION",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "pilot mt vernon ",
                "field": "search_value",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:57:19Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "ASSET_LOCATION",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "@ Pilot",
                "field": "note",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:57:15Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "CASE_CONTACT",
            "action": "UPDATED",
            "entityId": "6473726d-2067-4571-a484-961f6ef96e4e",
            "fields": [
              {
                "newValue": "DRIVER_CELL",
                "field": "contact_type",
                "previousValue": "DISPATCH"
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:57:06Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "CASE_CONTACT",
            "action": "UPDATED",
            "entityId": "6473726d-2067-4571-a484-961f6ef96e4e",
            "fields": [
              {
                "newValue": "+13185709119",
                "field": "phone",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:57:02Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "CASE_CONTACT",
            "action": "CREATED",
            "entityId": "6473726d-2067-4571-a484-961f6ef96e4e",
            "fields": [
              {
                "newValue": "Sabian Harris",
                "field": "name",
                "previousValue": null
              },
              {
                "newValue": "DISPATCH",
                "field": "contact_type",
                "previousValue": null
              },
              {
                "newValue": "FALSE",
                "field": "callback_roll_time",
                "previousValue": null
              },
              {
                "newValue": "FALSE",
                "field": "callback_eta",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "lastUpdatedBy": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        },
        "insertedAt": "2021-08-13T09:56:57Z",
        "author": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        },
        "lastUpdatedById": "d6eed835-f212-4add-8f04-31e29ad5da4a",
        "caseId": "fb950416-53dc-45be-b188-d10b7181ad3b",
        "__typename": "CaseNote",
        "id": "09df036c-f6bc-4cff-8161-16678087bd33",
        "body": "with Blairville, PA terminal",
        "authorId": "d6eed835-f212-4add-8f04-31e29ad5da4a",
        "case": null,
        "updatedAt": "2021-08-13T09:56:57Z"
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:56:40Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "CUSTOMER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "15001",
                "field": "zip",
                "previousValue": null
              },
              {
                "newValue": "PA",
                "field": "state",
                "previousValue": null
              },
              {
                "newValue": "ALIQUIPPA",
                "field": "city",
                "previousValue": null
              },
              {
                "newValue": "NATIONAL",
                "field": "type",
                "previousValue": null
              },
              {
                "newValue": "1457371",
                "field": "ship_to",
                "previousValue": null
              },
              {
                "newValue": "PGT TRUCKING INC (ERS)",
                "field": "name",
                "previousValue": null
              },
              {
                "newValue": "1004798",
                "field": "bill_to",
                "previousValue": null
              }
            ],
            "info": []
          },
          {
            "name": "PAYMENT",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "MICHELIN_LINE_OF_CREDIT",
                "field": "method",
                "previousValue": null
              }
            ],
            "info": []
          },
          {
            "name": "OTHER",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "23124a20-2dc9-47ed-8730-dc3fd0a74a45",
                "field": "case_customer_preference_id",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:56:04Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "INBOUND_PROGRAM",
            "action": "UPDATED",
            "entityId": "fb950416-53dc-45be-b188-d10b7181ad3b",
            "fields": [
              {
                "newValue": "+18008473911",
                "field": "phone_number",
                "previousValue": null
              },
              {
                "newValue": "Michelin OnCall",
                "field": "name",
                "previousValue": null
              }
            ],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "__typename": "CaseCall",
        "sourceNumber": "+13185709119",
        "userId": "d6eed835-f212-4add-8f04-31e29ad5da4a",
        "amazonConnectContactId": "33e0df50-04ea-41ea-bbb7-7c797cd668a8",
        "destinationNumber": "+18008473911",
        "insertedAt": "2021-08-13T09:56:04Z",
        "destinationName": "Peter Sturniolo",
        "caseId": "fb950416-53dc-45be-b188-d10b7181ad3b",
        "sourceOrganization": "Michelin OnCall",
        "startTime": "2021-08-13T09:55:54Z",
        "sourceName": null,
        "id": "765ef1cc-a8ce-4b1f-82fe-f1bfc45307d2",
        "destinationOrganization": null,
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        },
        "updatedAt": "2021-08-13T09:56:04Z",
        "direction": "INBOUND"
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:56:03Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "SUPPLIED_LINE",
            "action": "CREATED",
            "entityId": "621ccd92-4e1d-4c8e-b30a-daa22924dc20",
            "fields": [],
            "info": [
              {
                "name": "agreed_line_id",
                "value": "487867d6-5b4a-40c8-b2ff-ce499ea56c18"
              },
              {
                "name": "request_line_id",
                "value": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:56:03Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "AGREEMENT_LINE",
            "action": "CREATED",
            "entityId": "487867d6-5b4a-40c8-b2ff-ce499ea56c18",
            "fields": [],
            "info": [
              {
                "name": "request_line_id",
                "value": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6"
              }
            ]
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    },
    {
      "node": {
        "recordedAt": "2021-08-13T09:56:03Z",
        "__typename": "CaseHistoryEntry",
        "changes": [
          {
            "name": "REQUEST_LINE",
            "action": "CREATED",
            "entityId": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
            "fields": [],
            "info": []
          }
        ],
        "user": {
          "lastName": "Sturniolo",
          "firstName": "Peter",
          "insertedAt": "2019-05-02T00:55:07Z",
          "id": "d6eed835-f212-4add-8f04-31e29ad5da4a",
          "userName": "peter.sturniolo",
          "email": "peter.sturniolo@eagleteleservices.biz",
          "updatedAt": "2019-05-02T00:55:07Z"
        }
      }
    }
  ],
  "assets": [
    {
      "identifier": "e60c7ff9-4f99-4462-8bbf-517dd027916b",
      "unit": "1536576PLA",
      "breakdown": {
        "zip": "62864",
        "note": "@ Pilot",
        "country": "US",
        "mileMarker": null,
        "city": "Mount Vernon",
        "street": "4610 Broadway Street",
        "latitude": 38.3123551,
        "location": {
          "lon": -88.960948,
          "lat": 38.3123551
        },
        "state": "IL",
        "highway": null,
        "longitude": -88.960948
      },
      "vin": null,
      "assetType": "TRAILER"
    },
    {
      "identifier": "10250d90-a680-4734-b810-7bb326f9e94f",
      "unit": "19111",
      "breakdown": {
        "zip": "62864",
        "note": "@ Pilot",
        "country": "US",
        "mileMarker": null,
        "city": "Mount Vernon",
        "street": "4610 Broadway Street",
        "latitude": 38.3123551,
        "location": {
          "lon": -88.960948,
          "lat": 38.3123551
        },
        "state": "IL",
        "highway": null,
        "longitude": -88.960948
      },
      "vin": null,
      "assetType": "TRACTOR"
    }
  ],
  "michelinDomain": "ONCALL",
  "finalDealersResponse": [
    {
      "reason": "Accepted",
      "responseTime": "2021-08-13T10:58:30Z",
      "billTo": "1002519",
      "stName": "PURCELL TIRE & RUBBER COMPANY",
      "accepted": true,
      "entityId": "bf8b3521-28eb-4729-a0eb-5787380acba1",
      "shipTo": "1403191"
    }
  ],
  "provider": {
    "identifier": "274a2eb6-6bcb-4f64-91ff-c984718275a3",
    "person": [
      {
        "phone": "+16183153384",
        "name": "Billy Minor"
      }
    ],
    "billTo": "1002519",
    "name": "PURCELL TIRE & RUBBER COMPANY",
    "location": {
      "zip": "62864",
      "country": "US",
      "city": "MOUNT VERNON",
      "street": "1212 BROADWAY",
      "state": "IL"
    },
    "shipTo": "1403191"
  },
  "orderer": {
    "identifier": "10ff72ef-6528-4d2f-b45b-eb4d338b78f1",
    "person": [
      {
        "identifier": "9f8424a7-7652-4e4b-beba-ad0579cd75c6",
        "phone": "+18557482013",
        "name": "Breakdown",
        "callbackRolltime": false,
        "type": "DISPATCH",
        "callbackEta": false,
        "email": false
      },
      {
        "identifier": "6473726d-2067-4571-a484-961f6ef96e4e",
        "phone": "+13185709119",
        "name": "Sabian Harris",
        "callbackRolltime": false,
        "type": "DRIVER_CELL",
        "callbackEta": true,
        "email": false
      }
    ],
    "billTo": "1004798",
    "name": "PGT TRUCKING INC (ERS)",
    "accountSelected": "National Account",
    "location": {
      "zip": "15001",
      "identifier": "10ff72ef-6528-4d2f-b45b-eb4d338b78f1",
      "city": "ALIQUIPPA",
      "street": "4200 INDUSTRIAL BLVD",
      "state": "PA"
    },
    "shipTo": "1457371"
  },
  "estimate": {
    "products": [
      {
        "identifier": "487867d6-5b4a-40c8-b2ff-ce499ea56c18",
        "attributes": {
          "sculptedTreadName": "XZE2+",
          "loadRange": "NA",
          "rimType": null,
          "confirmed": true,
          "manufacturer": "Michelin",
          "unit": "1536576PLA",
          "rimMaterial": null,
          "requestedAction": "REPLACE",
          "wheelOffset": null,
          "tireCondition": "FLAT_SPOTTED",
          "tireSize": "275/80R22.5",
          "tirePosition": "RFI",
          "productType": "New"
        }
      },
      {
        "identifier": "4fc7aba3-40a3-4d65-9fb6-7c91bf134b4d",
        "attributes": {
          "sculptedTreadName": "XZE2+",
          "loadRange": "NA",
          "rimType": null,
          "confirmed": true,
          "manufacturer": "Michelin",
          "unit": "1536576PLA",
          "rimMaterial": null,
          "requestedAction": "REPLACE",
          "wheelOffset": null,
          "tireCondition": "FLAT_SPOTTED",
          "tireSize": "275/80R22.5",
          "tirePosition": "RFO",
          "productType": "New"
        }
      }
    ]
  },
  "id": "D649451",
  "invoice": {
    "billable": true,
    "products": [
      {
        "identifier": "a1925fb9-f733-4930-8fad-9e875457bdb5",
        "attributes": {
          "sculptedTreadName": "X Multi Energy Z",
          "loadRange": "H",
          "rimType": null,
          "confirmed": true,
          "manufacturer": "Michelin",
          "unit": "1536576PLA",
          "rimMaterial": null,
          "requestedAction": "REPLACE",
          "wheelOffset": null,
          "tireCondition": "FLAT_SPOTTED",
          "tireSize": "275/80R22.5",
          "tirePosition": "RFI",
          "productType": "New"
        }
      },
      {
        "identifier": "a4f958f8-972d-43a6-8c11-53a6b53de0a2",
        "attributes": {
          "sculptedTreadName": "X Multi Energy Z",
          "loadRange": "H",
          "rimType": null,
          "confirmed": true,
          "manufacturer": "Michelin",
          "unit": "1536576PLA",
          "rimMaterial": null,
          "requestedAction": "REPLACE",
          "wheelOffset": null,
          "tireCondition": "FLAT_SPOTTED",
          "tireSize": "275/80R22.5",
          "tirePosition": "RFO",
          "productType": "New"
        }
      }
    ]
  },
  "rollingAt": "2021-08-13T12:04:54Z",
  "event": {
    "statusHistory": [
      {
        "newStatus": "DISPATCH",
        "oldStatus": "NEW",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T10:00:43Z",
        "id": "f2d4d0a6-c9d3-44a8-807f-3a381e160ee7"
      },
      {
        "newStatus": "DISPATCHED",
        "oldStatus": "DISPATCH",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T11:03:47Z",
        "id": "6214ac12-e08a-4975-8edb-cd3696a7e4c2"
      },
      {
        "newStatus": "EN_ROUTE",
        "oldStatus": "DISPATCHED",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T11:13:53Z",
        "id": "d359233f-1f17-431d-b1ba-74976be6345a"
      },
      {
        "newStatus": "ARRIVED",
        "oldStatus": "EN_ROUTE",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T11:31:24Z",
        "id": "c8b92176-3511-41df-8a22-767e6f9567ca"
      },
      {
        "newStatus": "ROLLING",
        "oldStatus": "ARRIVED",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T12:04:54Z",
        "id": "91aff7d8-d2c4-484a-b690-93d0be0926d9"
      },
      {
        "newStatus": "CLOSED",
        "oldStatus": "ROLLING",
        "__typename": "StatusHistory",
        "changedAt": "2021-08-13T12:05:00Z",
        "id": "11d2b913-15b3-4ee3-8ad9-cf085f1f45f4"
      }
    ],
    "eventStatus": "CLOSED",
    "attributes": {
      "eta": {
        "minMinutes": "45",
        "maxMinutes": "60"
      },
      "rollingAt": "2021-08-13T12:04:54Z",
      "downAt": "2021-08-13T09:56:03Z"
    },
    "eventType": "ers"
  },
  "order": {
    "products": [
      {
        "identifier": "fab97736-7079-409b-9fea-fa95cd50fa6a",
        "attributes": {
          "unit": "1536576PLA",
          "sculptedTreadName": "XZE2+",
          "loadRange": "NA",
          "rimMaterial": null,
          "requestedAction": "REPLACE",
          "wheelOffset": null,
          "tireCondition": "FLAT_SPOTTED",
          "rimType": null,
          "tireSize": "275/80R22.5",
          "tirePosition": "RFO",
          "productType": "New",
          "manufacturer": "Michelin"
        }
      },
      {
        "identifier": "f99c4969-0126-4ad9-8bd4-0c348ec7f7f6",
        "attributes": {
          "unit": "1536576PLA",
          "sculptedTreadName": "XZE2+",
          "loadRange": "NA",
          "rimMaterial": null,
          "requestedAction": "REPLACE",
          "wheelOffset": null,
          "tireCondition": "FLAT_SPOTTED",
          "rimType": null,
          "tireSize": "275/80R22.5",
          "tirePosition": "RFI",
          "productType": "New",
          "manufacturer": "Michelin"
        }
      }
    ]
  },
  "created_at": "2021-08-13T09:56:03Z",
  "_id": {
    "$oid": "D649451"
  }
}

module.exports = data