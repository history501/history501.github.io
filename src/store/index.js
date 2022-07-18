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
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
