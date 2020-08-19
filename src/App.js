import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.config'
import StartPage from './components/StartPage/StartPage'
import QuestionPage from './components/QuestionPage/QuestionPage'
import FarewellPage from './components/FarawellPage/FarewellPage'


function App() {



  const initialData = {
    id: 1,
    organization_name: 'Tap30',
    organization_name_fa: 'تپسی',
    design_statics: {
      logo_url: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGru99VZdwbGw/company-logo_200_200/0?e=2159024400&v=beta&t=zejZRsZxJ0xgLz1K5-UzmoaaYoSDdqNz0-N8NoQUkRk',
      background_url: 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm33-chim-19-d-fabric_2.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=80&usm=15&vib=3&w=1300&s=6429dfa3dc54217e77046f6c1f30d727',
    },
    MAX_QUESTION_NUMBER: 4,
    questions: [
      {
        question_title: 'از خدمات راضی هستید؟',
        options: [
          {
            option_number: 1,
            option: 'خوبه'
          }, {
            option_number: 2,
            option: 'بد نیست'
          }, {
            option_number: 3,
            option: "نه!!!"
          }
        ]
      }, {
        question_title: 'آیا از زمان انتظار برای پیدا شدن سفیر تپ‌سی راضی هستید؟ ',
        options: [
          {
            option_number: 1,
            option: 'راضی ام'
          }, {
            option_number: 2,
            option: 'نه ولی اوکیه'
          }, {
            option_number: 3,
            option: 'آشغاله'
          }
        ]
      }, {
        question_title: 'مشکل چی بود؟',
        options: [
          {
            option_number: 1,
            option: 'کولر نداشت'
          }, {
            option_number: 2,
            option: 'صدای موسیقی زیاد بود'
          }, {
            option_number: 3,
            option: 'چی بگم والا!'
          }
        ]
      }, {
        question_title: 'ایا به موقع سرویس رسانی شد؟',
        options: [
          {
            option_number: 1,
            option: 'اره'
          }, {
            option_number: 2,
            option: 'نه'
          }
        ]
      }, {
        question_title: 'نظافت عمومی رعایت شده بود؟',
        options: [
          {
            option_number: 1,
            option: 'اره'
          }, {
            option_number: 2,
            option: 'نه'
          }, {
            option_number: 3,
            option: 'اصلا حرفشو نزن'
          }
        ]
      }
    ]
  }

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/Questions">
            <QuestionPage initialData={initialData} />
          </Route>
          <Route exact path="/Farewell">
            <FarewellPage initialData={initialData} />
          </Route>
          <Route path="/">
            <StartPage design_statics={initialData.design_statics} />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
