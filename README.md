## HOW TO USE

```
<JennyCarousel
    SLIDE_WIDTH={300}
    SLIDE_HEIGHT={300}
    SLIDE_MARGIN={5}
    NUM_OF_DATAS={10}
    NUM_OF_SLIDES={4}
    BACKGROUND_COLOR={"white"}
    >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
<JennyCarousel/>
```

<br>

- SLIDE_WIDTH : width of single slide <br>
- SLIDE_HEIGHT : height of single slide <br>
- SLIDE_MARGIN : gap between slides `gap=SLIDE_MARGIN*2` <br>
- NUM_OF_DATAS : num of total slides <br>
- NUM_OF_SLIDES : num of slides you want to show at once <br>
- BACKGROUND_COLOR : background color of the slide <br>
- BUTTON_TYPE: selecting the next, prev button to be horizontal to the carousel wrapper or vertical. If wanting vertical, just give the prop as `BUTTON_TYPE="VERTICAL"`

<br><br>

### Default Setting ✔

If you don't give specific value, the default setting will be like this below:

```
NUM_OF_DATAS = 8,
SLIDE_WIDTH = 308,
SLIDE_HEIGHT = 540,
SLIDE_MARGIN = 5,
NUM_OF_SLIDES = 4,
BACKGROUND_COLOR = "#fff",
BUTTON_SIZE = "20",
FONT_SIZE = "15",
BUTTON_TYPE = "HORIZONTAL",
```

<br><br>

---

## 사용법

```
<JennyCarousel
    SLIDE_WIDTH={300}
    SLIDE_HEIGHT={300}
    SLIDE_MARGIN={5}
    NUM_OF_DATAS={10}
    NUM_OF_SLIDES={4}
    BACKGROUND_COLOR={"white"}
    >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
<JennyCarousel/>
```

<br>

- SLIDE_WIDTH : 한 슬라이드가 가질 width 크기 <br>
- SLIDE_HEIGHT : 한 슬라이드가 가질 height 크기 <br>
- SLIDE_MARGIN : 슬라이드 사이사이의 넓이 `gap=SLIDE_MARGIN*2` <br>
- NUM_OF_DATAS : 총 슬라이드 수, 캐로셀에 적용할 총 데이터 수 <br>
- NUM_OF_SLIDES : 한 가로축에 보일 슬라이드 개수 <br>
- BACKGROUND_COLOR : 캐로셀 슬라이드 전체 배경색 <br>
- BUTTON_TYPE: 캐로셀 기준 버튼을 양 옆에 둘 지 위에 둘지 정하는 type. 버튼을 캐로셀 위에 두고싶다면 오른쪽의 설정을 props에 넘기면 됨 `BUTTON_TYPE="VERTICAL"`

<br><br>

### 기본 세팅 ✔

직접 넘길 props 값을 정하지 않으면 기본적으로 아래의 세팅이 적용됩니다.

```
NUM_OF_DATAS = 8,
SLIDE_WIDTH = 308,
SLIDE_HEIGHT = 540,
SLIDE_MARGIN = 5,
NUM_OF_SLIDES = 4,
BACKGROUND_COLOR = "#fff",
BUTTON_SIZE = "20",
FONT_SIZE = "15",
BUTTON_TYPE = "HORIZONTAL",
```

<br><br>
