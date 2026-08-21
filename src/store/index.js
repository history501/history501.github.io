import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objects:[
      {
        id: 1,
        title: 'Министерский мост',
        mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjQtidA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/1/1.jpg'),
            source: ''
          },
		  {
            url: require('../assets/images/1/2.jpg'),
            source: ''
          },
		  {
            url: require('../assets/images/1/3.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 2,
        title: 'Железнодорожное полотно',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjOHjGB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/2/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 3,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjOX8WA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/3/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 4,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjOt6xB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/4/1.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/4/2.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 5,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjOx7tD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/5/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 6,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSAS8D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/6/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 7,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSQmKB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/7/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 8,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSQmKB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/8/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 9,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSQmKB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/9/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 10,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSQmKB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/10/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 11,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSaroB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/11/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 12,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSeC0C" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/12/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 13,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSqKHD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/13/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 14,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSqKHD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/14/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 15,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSqKHD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/15/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 16,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSBecB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/16/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 17,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSBecB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/17/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 18,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSBecB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/18/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 19,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSBecB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/19/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 20,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSBecB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/20/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 21,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSBecB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/21/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 22,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSBecB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/22/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 23,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSBecB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/23/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 24,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSRo1A" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/24/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 25,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSRo1A" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/25/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 26,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSbQSA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/26/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 27,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSfFKD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/27/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 28,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSfFKD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/28/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 29,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSrHdB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/29/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 30,
        title: 'Указатель',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSCY9C" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/30/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
      {
          id: 31,
          title: 'Железнодорожная станция Чирча',
          mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNnNvmtD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
          description: '',
          images:[],
          comments:[]
        },
	  {
        id: 32,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/32/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 33,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/33/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 34,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/34/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 35,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/35/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 36,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/36/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 37,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/37/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 38,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/38/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 39,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/39/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 40,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/40/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 41,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/41/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 42,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/42/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 43,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/43/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 44,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/44/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 45,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/45/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 46,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/46/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 47,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSSWWC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/47/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 48,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSsT2D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/48/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 49,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSw9~D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/49/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 50,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSw9~D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/50/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 51,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSHVWD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/51/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 52,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSHVWD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/52/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 53,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSHVWD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/53/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 54,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSHVWD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/54/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 55,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSHVWD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/55/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 56,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSTdoB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/56/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 57,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSTdoB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/57/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 58,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSTdoB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/58/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 59,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSdAGC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/59/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 60,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSdAGC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/60/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 61,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjSdAGC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/61/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 62,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjShLcB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/62/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 63,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjStsDB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/63/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 64,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjShLcB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/64/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 65,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjWAd8A" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/65/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 66,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjWAd8A" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/66/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	  {
        id: 67,
        title: 'Столб телефонно-телеграфной линии',
		mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjWAd8A" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/67/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	    {
        id: 68,
        title: 'Столб телефонно-телеграфной линии',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CCUNjWEtCB" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/68/1.jpg'),
            source: ''
          },
        ],
        comments:[]
      },
	    {
        id: '93-0',
        number: 2,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Периметральное ограждение',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTuVvQn1" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Вся территория лагеря окружена ограждением — забором из колючей проволоки высотой более трёх метров, предназначенным для предотвращения побегов заключённых. По обе стороны от основного ограждения, на расстоянии около пяти метров, располагались два невысоких деревянных барьера, обозначавших границы запретной зоны, которая находилась под постоянным наблюдением вооружённой охраны с вышек. </p><p>Поскольку лагпункт № 93 считался относительно спокойным, вероятно, здесь было решено использовать для обозначения запретной зоны деревянные барьеры вместо дополнительных рядов колючей проволоки. </p><p>В наши дни ограждение сохранилось почти в первоначальном виде, однако отдельные участки основного забора накренились или упали из-за неустойчивости грунта. Колючая проволока также сохранилась, хотя за прошедшие десятилетия покрылась ржавчиной. </p>',
        images:[
          {
            url: require('../assets/images/l93/0/1.jpg'),
            source: ''
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/enceinte_portail.php'
          },
        ],
      },
	    {
        id: '93-1',
        number: 30,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Железная дорога',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTuZm83M" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Железная дорога была одновременно и средством доставки заключённых в лагеря, и главным местом их принудительного труда. Вместе с тем именно вдоль строящейся магистрали происходили многочисленные встречи и столкновения между коренными жителями Севера и системой ГУЛАГа.</p>',
        images:[
          {
            url: require('../assets/images/l93/1/1.jpg'),
            source: 'Прудиус Алекс'
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/rails.php'
          },
        ],
      },
	    {
        id: '93-2',
        number: 9,
        safety: 'полная сохранность',
        plan:'',
        title: 'Хвойная аллея',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTuZJL7-" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Центральная дорога в лагпункте обрамлена хвойной аллеей. Историю её возникновения описал бывший заключенный этого лагпункта Иван Дмитриевич Марманов в своей книге «Страна деревянного Солнца» (Тюмень, 2008): </p><p> «Инженерно-мостовику Бутусову Вадиму Осиповичу пришла в голову мысль посадить в лагере аллею из деревьев хвойных пород. По сторонам дороги будут проходить осушительные кюветы с пологими откосами, за кюветами по сторонам дороги будут посажены ели. Перед бараками, перед всеми сооружениями будут переброшены ажурные мостики с овальными перилами. </p><p>Руководство лагеря сразу не дало разрешения на посадку аллеи, ссылаясь на законы охраны и надзора. Деревья в зоне не позволяют часовому с вышки определить человек это или дерево. </p><p>Когда начальник лагеря и оперуполномоченный рассмотрели эскиз обустройства территории лагеря, то их охватило желание как можно скорее превратить эту идею в жизнь. </p><p>Бесконвойные привезли елей, все как на подбор — по метр двадцать высотой с красивыми кронами. Когда работы были закончены, то было чем полюбоваться. Любоваться приезжали большие чины из других лагерей, и даже прокурор стройки высказал одобрение». </p>',
        images:[
          {
            url: require('../assets/images/l93/2/1.jpg'),
            source: 'https://yamal.ch/source/html/allee.php'
          },
          {
            url: require('../assets/images/l93/2/2.jpg'),
            source: 'https://yamal.ch/source/html/allee.php'
          },
        
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/allee.php'
          },
        ],
      },
	    {
        id: '93-3',
        number: 29,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Здание путевых обходчиков',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTuZVV~m" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Здание расположено рядом с путевым развитием разъезда Щучий, примерно в 150 метрах от бараков охраны и обслуживающего персонала. </p><p>Оно состоит из трёх помещений: небольшого тамбура, просторной комнаты с окнами, выходящими на железнодорожные пути, и небольшого помещения в задней части здания. Все три помещения отапливались одной большой кирпичной печью с двумя топками, расположенными по обе стороны дымохода. </p><p>Отсутствие каких-либо сохранившихся элементов внутреннего оборудования не позволяет с уверенностью определить назначение каждого помещения. Однако расположение здания у железнодорожных путей свидетельствует о том, что оно было связано с эксплуатацией железной дороги. </p><p>В отличие от других станций, разъезд Щучий не планировался как крупный железнодорожный узел. Его основным назначением было обеспечение разъезда встречных поездов на участке между станциями Ивлевская и Надым. </p><p>После закрытия лагеря и прекращения строительства железной дороги здание продолжало использоваться. Об этом свидетельствует установленная здесь металлическая печь, изготовленная из пустой бочки. </p><p>Часть наружных стен позднее была разобрана: древесину использовали либо как топливо, либо как строительный материал. </p>',
        images:[
          {
            url: require('../assets/images/l93/3/1.jpg'),
            source: 'https://yamal.ch/source/html/bat_croisement.php'
          },
          {
            url: require('../assets/images/l93/3/2.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/3/3.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/4.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/5.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/6.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/7.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/8.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/9.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/10.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/11.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/12.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/3/13.jpg'),
            source: 'Прудиус Мари'
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bat_croisement.php'
          },
        ],
      },
	    {
        id: '93-4',
        number: 33,
        safety: 'полная утрата',
        plan:'',
        title: 'Пост стрелочника',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTuZ6XPU" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>На южном конце разъездного пути станции Щучье, у стрелочного перевода, находилась небольшая будка, построенная непосредственно на железнодорожной насыпи. Это было укрытие для дежурного стрелочного поста, отвечавшего за перевод стрелки, а также за управление входным и выходным сигналами в направлении Надыма. </p><p>Сооружение представляло собой простое прямоугольное помещение с окном, обращённым к железнодорожному пути, и небольшой кирпичной печью. Сегодня будка полностью исчезла — о её расположении свидетельствуют только сохранившиеся фундаменты. </p><p>Со своего поста стрелочник мог вручную переводить стрелку. Кроме того, с помощью системы тросов он управлял семафором, который показывал положение стрелочного перевода. Этот сигнал, ныне разрушенный, находился в нескольких десятках метров южнее будки. Между будкой и семафором располагалось промежуточное устройство для передачи движения тросов. </p>',
        images:[
          {
            url: require('../assets/images/l93/4/1.jpg'),
            source: 'Прудиус Алекс'
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/poste_aiguilleur.php'
          },
        ],
      },
	    {
        id: '93-5',
        number: 34,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Здание путевых обходчиков',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTuZn4-F" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/l93/5/1.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/5/2.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/5/3.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/5/4.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/5/5.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/5/6.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/5/7.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/5/8.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/5/9.jpg'),
            source: 'Прудиус Алекс'
          },
        ],
        comments:[],
        links:[],
      },
	    {
        id: '93-6',
        number: 26,
        safety: 'частичная сохранность',
        plan:'',
        title: 'Сарай',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTuZr4pD" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/l93/6/1.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/2.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/3.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/4.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/5.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/6.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/7.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/8.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/9.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/10.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/6/11.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/6/12.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/6/13.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/6/14.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/6/15.jpg'),
            source: 'Прудиус Мари'
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bats_nord.php'
          },
        ],
      },
	    {
        id: '93-7',
        number: 27,
        safety: 'частичная сохранность',
        plan:'',
        title: 'Ларек для вольнонаемных',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTuZzQ3Y" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/l93/7/1.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/2.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/3.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/4.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/5.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/6.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/7.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/8.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/9.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/10.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/7/11.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/7/12.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/7/13.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/7/14.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/7/15.jpg'),
            source: 'Прудиус Мари'
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bats_nord.php'
          },
        ],
      },
	    {
        id: '93-8',
        number: 25,
        safety: 'полная утрата',
        plan:'',
        title: 'Уборная для вольнонаемных',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTuZ7OYA" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/l93/8/1.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/8/2.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/8/3.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/8/4.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/8/5.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/8/6.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/8/7.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/8/8.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/8/9.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/8/10.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/8/11.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/8/12.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/8/13.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/8/14.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/8/15.jpg'),
            source: 'Прудиус Мари'
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bats_nord.php'
          },
        ],
      },
	    {
        id: '93-9',
        number: 24,
        safety: 'полная утрата',
        plan:'',
        title: 'Казарма',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6APki" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bats_nord.php'
          },
        ],
      },
	    {
        id: '93-10',
        number: 19,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Конюшня',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6IMn2" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bats_nord.php'
          },
        ],
      },
      {
        id: '93-11',
        number: 23,
        safety: 'значительная сохранность',
        plan:'',
        title: '4-х квартирный дом',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6MV-f" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bats_nord.php'
          },
        ],
      },
	    {
        id: '93-12',
        number: 22,
        safety: 'значительная сохранность',
        plan:'',
        title: '2-х квартирный дом',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6Q6pL" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bats_nord.php'
          },
        ],
      },
	    {
        id: '93-13',
        number: 21,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Склад',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6YMlH" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bats_nord.php'
          },
        ],
      },
	    {
        id: '93-14',
        number: 20,
        safety: 'частичная сохранность',
        plan:'',
        title: 'Здание',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6Y-0i" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/bats_nord.php'
          },
        ],
      },
	    {
        id: '93-15',
        number: 5,
        safety: 'полная утрата',
        plan:'',
        title: 'Уборная (не сохранилась)',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6eMio" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B9.php'
          },
        ],
      },
	    {
        id: '93-16',
        number: 14,
        safety: 'полная сохранность',
        plan:'',
        title: 'Шизо',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6eMio" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Это фактически «тюрьма в тюрьме», куда помещали на несколько дней заключенных, нарушивших лагерный режим (совершение преступления внутри лагеря и превращение в подследственную, отказ от работы, невыполнение требований администрации, конфликт с другими заключенными и т.д.). </p><p>Во время «сучьевой войны» в штрафные изоляторы временно, с целью защиты администрации, помещали заключенных, отказавшихся от «воровского закона», если им грозило убийство «блатными». </p> <p>Суточная норма питания – 400 г хлеба и вода. В холодную погоду здесь топить нечего, тепло от печи проникало в камеры через отверстия над обитыми изнутри железом дверями. Надзиратель находился в центральном помещении возле печи. В связи с тем, что нахождение в изоляторе приводило к истощению и потере сил (заключенный «доходил»), попадание сюда было для невольников крайне нежелательным. </p>',
        images:[
          {
            url: require('../assets/images/l93/16/1.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/16/2.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/16/3.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/16/4.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/16/5.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/16/6.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/16/7.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/16/8.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/16/9.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/10.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/11.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/12.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/13.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/14.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/15.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/16.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/17.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/18.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/19.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/20.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/21.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/22.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/23.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/24.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/25.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/26.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/27.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/28.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/29.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/30.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/16/31.jpg'),
            source: 'Прудиус Мари'
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B3.php'
          },
        ],
      },
	    {
        id: '93-17',
        number: 11,
        safety: 'полная утрата',
        plan:'',
        title: 'Барак (не сохранился)',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6a4z7" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B458.php'
          },
        ],
      },
	    {
        id: '93-18',
        number: 13,
        safety: 'частичная сохранность',
        plan:'',
        title: 'Барак',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6iKIP" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B458.php'
          },
        ],
      },
	    {
        id: '93-19',
        number: 10,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Барак',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6uB8E" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/l93/19/1.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/2.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/3.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/4.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/5.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/6.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/7.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/8.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/9.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/10.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/11.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/12.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/13.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/19/14.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/15.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/16.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/17.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/18.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/19.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/20.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/21.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/22.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/23.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/24.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/25.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/26.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/27.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/28.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/29.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/30.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/31.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/32.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/33.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/34.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/35.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/36.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/37.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/38.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/39.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/40.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/41.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/42.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/43.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/44.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/45.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/46.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/47.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/48.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/19/49.jpg'),
            source: 'Прудиус Мари'
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B458.php'
          },
        ],
      },
	    {
        id: '93-20',
        number: 4,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Кухня',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6yENh" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[
          {
            url: require('../assets/images/l93/20/1.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/20/2.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/20/3.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/20/4.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/20/5.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/20/6.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/20/7.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/20/8.jpg'),
            source: 'Прудиус Алекс'
          },
          {
            url: require('../assets/images/l93/20/9.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/10.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/11.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/12.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/13.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/14.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/15.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/16.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/17.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/18.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/19.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/20.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/21.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/22.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/23.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/24.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/25.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/26.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/27.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/28.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/29.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/30.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/31.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/32.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/33.jpg'),
            source: 'Прудиус Мари'
          },
          {
            url: require('../assets/images/l93/20/34.jpg'),
            source: 'Прудиус Мари'
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B6.php'
          },
        ],
      },
	    {
        id: '93-21',
        number: 3,
        safety: 'полная утрата',
        plan:'',
        title: 'Столовая',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6yENh" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B14.php'
          },
        ],
      },
	    {
        id: '93-22',
        number: 13,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Ларек (восстановлен)',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6BFkT" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B2.php'
          },
        ],
      },
	    {
        id: '93-23',
        number: 18,
        safety: 'частичная сохранность',
        plan:'',
        title: 'Склад-мастерская',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6FFIo" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B10.php'
          },
        ],
      },
	    {
        id: '93-24',
        number: 15,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Вахта',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6JWZv" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '<p>Это помещение, где находились дежурные охранники, открывавшие ворота, осуществлявшие пропуск в зону и выпуск из неё. </p><p>Кроме того, на вахте проводился индивидуальный обыск («шмон») заключенных, возвратившихся с работы или прибывших этапом. Цель обыска — не допустить пронос в зону запрещенных предметов, в том числе самодельного холодного оружия, алкоголя и т.д. </p><p>«Шмон» не проводился только в тех случаях, когда в лагерь возвращалась бригада заключенных, выполнявшая дневную рабочую норму более, чем на 150 %. При таком перевыполнении нормы один рабочий день заключенным засчитывался за три. </p><p>Формально, в соответствии с существовавшим порядком на вахте имелась и комната, предназначенная для свиданий с приехавшими повидаться близкими. Но ввиду особой удаленности данного лагеря близкие не приезжали, и таких свиданий не было. </p>',
        safety: 'значительная сохранность',
        plan: require('../assets/images/l93/24/plan.jpg'),
        images:[
          {
            url: require('../assets/images/l93/24/1.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/l93/24/2.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/l93/24/3.jpg'),
            source: ''
          },
          {
            url: require('../assets/images/l93/24/4.jpg'),
            source: ''
          },
        ],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B1.php'
          },
        ],
      },
	    {
        id: '93-25',
        number: 8,
        safety: 'частичная сохранность',
        plan:'',
        title: 'Административное здание',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6NZpV" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B8.php'
          },
        ],
      },
	    {
        id: '93-26',
        number: 7,
        safety: 'полная утрата',
        plan:'',
        title: 'Здание',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6RSlV" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B13.php'
          },
        ],
      },
	    {
        id: '93-27',
        number: 6,
        safety: 'частичная сохранность',
        plan:'',
        title: 'Административное здание (не сохранилось)',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6VO3m" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/B7.php'
          },
        ],
      },
	    {
        id: '93-28',
        number: 28,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Вышка',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6vQ8D" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/miradors.php'
          },
        ],
      },
	    {
        id: '93-34',
        number: 1,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Вышка',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6zC0F" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/miradors.php'
          },
        ],
      },
	    {
        id: '93-35',
        number: 16,
        safety: 'полная утрата',
        plan:'',
        title: 'Ворота в лагерь',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu67O3T" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[
          {
            source: 'EPFL',
            url: 'https://yamal.ch/source/html/enceinte_portail.php'
          },
        ],
      },
	    {
        id: '93-31',
        number: 32,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Мост',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6jGia" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[],
      },
	    {
        id: '93-30',
        number: 36,
        safety: 'частичная сохранность',
        plan:'',
        title: 'Семафор',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6jGia" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[],
      },
	    {
        id: '93-28',
        number: 28,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Семафор',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu66GNp" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[],
      },
	    {
        id: '93-29',
        number: 37,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Мост',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6f41X" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[],
      },
	    {
        id: '93-32',
        number: 38,
        safety: 'значительная сохранность',
        plan:'',
        title: 'Мост',
		    mapUrl: '<iframe src="https://yandex.ru/map-widget/v1/-/CTu6rIJ6" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>',
        description: '',
        images:[],
        comments:[],
        links:[],
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
