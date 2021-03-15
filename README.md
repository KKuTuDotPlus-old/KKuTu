# 끄투닷플러스
- ⚙️ 원작자 깃허브 :
	* [JJoriping](http://blog.jjo.kr/)
- 🌎 바로 가기 :
	* [KKuTuDotPlus](https://kkutu.plus)
	* [DesignSupport](https://kkutu.plus/designSupport.html)
	* [Discord](https://discord.gg/k9wJkQmKvY)
## ⚠️ 알립니다 !
- 끄투닷플러스의 허가 없이 이 레포지토리를 참고,사용하거나 리소스를 사용하지 마세요.
	* 끄투닷플러스에서 무료로 제공하는 리소스 다운로드 : [DesignSupport](https://kkutu.plus/designSupport.html)

## 한국어
**글자에 즐거움을 더합니다. 끄투닷플러스**

**끄투**는 여러분의 어휘력을 발휘할 수 있는 다양한 단어 게임들이 모여 있는 캐주얼 게임입니다.
로봇과 혼자서 게임을 할 수도 있고, 서버에 접속해 있는 다른 사람들과 함께 할 수도 있죠.
이 저장소는 여러분이 **끄투**를 즐기기 위해 준비해야 할 것들에 대해 알리고 있습니다.

### 설치 방법
#### Windows 환경
1. 이 레포지토리를 내려받습니다.
1. [node.js](https://nodejs.org/ko/) 인스톨러를 내려받아 설치(버전 6 이상)합니다. [npm](https://www.npmjs.com/)과 함께 설치되어야 합니다.
1. 명령 프롬프트에서 `npm install -g grunt grunt-cli`를 입력해 [grunt](https://gruntjs.com/)를 설치합니다.
1. [PostgreSQL](https://www.postgresql.org/) 인스톨러를 내려받아 *pgAdmin*(자동으로 설치됨)과 함께 설치합니다.
1. *pgAdmin*을 실행시키고 SQL 파일(`./db.sql`)을 데이터베이스에 입력시킵니다.
	* 자세한 과정은 [개발자 블로그][dev-blog]를 참고하세요.
1. 배치 파일(`./server-setup.bat`)을 실행시킵니다.
1. 배치 파일(`./Server/run.bat`)을 실행시킵니다.
	* 되도록 이 배치 파일을 직접 종료하지 말고 이를 실행시켜 나타나는 창을 종료하세요.

#### Linux 환경
1. 이 레포지토리를 내려받습니다.
1. 패키지 매니저를 이용하여 [node.js](https://nodejs.org/)와 [npm](https://www.npmjs.com/)을 설치(버전 6 이상)합니다.
1. `npm install -g grunt grunt-cli`를 입력해 [grunt](https://gruntjs.com/)를 설치합니다.
1. 패키지 매니저를 이용하여 [PostgreSQL](https://www.postgresql.org/)과 *psql*을 설치합니다.
1. SQL 파일(`./db.sql`)을 데이터베이스에 입력시킵니다.
	1. 명령어를 다음 예와 같이 입력할 수 있습니다: `sudo -u postgres psql --quiet main < ./db.sql`
1. 섈 스크립트 파일(`./server-setup.bat`)을 실행시킵니다. (Windows 전용 파일이지만 Linux에서도 작동합니다.)
1. 경로 `./Server`에서 다음 명령어들을 차례대로 실행합니다:
	1. (게임 서버) `node lib/Game/cluster.js 0 1`
	1. (웹 서버) `node lib/Web/cluster.js 1`

#### 공통
- PostgreSQL 데이터베이스 서버에 접속하기 위해 설정 파일(`./Server/lib/sub/global.json`)에서 `PG_PASS` 값을 **반드시** 수정해야 합니다.
- 폴더 `./Server/lib/sub`에 oAuth 설정 파일(`auth.json`)과 전역 설정 파일(`global.json`)을 **반드시** 만들어 주세요. 본 레포지토리에는 각 파일의 양식이 들어가 있습니다.
- 본 레포지토리에는 [WordNet](https://wordnet.princeton.edu/) 자료가 포함되어 있습니다. 서버를 운영할 때 반드시 사용자에게 이에 대한 라이선스를 안내해야 합니다.
- 호스트 `127.0.0.2`는 웹 서버와 게임 서버 사이의 연결을 위해 예약된 주소이므로 이 주소를 사용하지 말아야 합니다.
- 서버가 정상적으로 설치된 다음부터는 서버를 실행시키기 위해서 가장 마지막 단계만 수행하면 됩니다.
- 서버가 성공적으로 열린 후 웹 브라우저에서 `127.0.0.1`(다른 사람들은 해당 컴퓨터의 외부 IP 주소)로 접속하여 끄투를 즐길 수 있습니다.
- 랭킹 및 세션 기능 일부는 [Redis](https://redis.io/) 서버가 실행되어야만 작동합니다. 일단 이를 설치하지 않아도 서버가 작동할 수 있도록 조치했습니다.
- [Cloudflare](https://www.cloudflare.com/)를 이용하는 경우, DNS 탭의 status를 `DNS only`로 두세요. `DNS and HTTP proxy (CDN)`으로 둘 경우, 방 만들기와 방 입장이 불가합니다.

### 라이선스
- 모든 소스 코드에 대해: [GNU 일반 공중 사용 라이선스](https://github.com/JJoriping/KKuTu/blob/master/LICENSE)
- 모든 이미지 및 소리에 대해: [크리에이티브 커먼즈 라이선스 CC BY](https://creativecommons.org/licenses/by/4.0/)
	- 다만 본 레포지토리에서 제공하는 소스 코드로 끄투 서비스를 운영하기 위해 이들을 사용하는 경우 저작자 표시(BY)를 생략할 수 있습니다.

## English
> Rule the words! KKuTuDotPlus

**KKuTu** is a casual game containing various word games that let players use their vocabulary.
Players can play alone with a robot, or play with other players who have entered to a server.
This repository provides you what you have to prepare to play **KKuTu**.

### How to Install
#### For Windows
1. Download or clone this repository to your machine.
1. Install [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)(this will be installed automatically). The version should be ≥6.
1. Open *cmd* and run `npm install -g grunt grunt-cli` to install [grunt](https://gruntjs.com/).
1. Install [PostgreSQL](https://www.postgresql.org/) database server and *pgAdmin*(this will be installed automatically).
1. Run *pgAdmin* and put the SQL file(`./db.sql`) into your database.
	* For further details, visit [my blog][dev-blog].
1. Run the batch file(`./server-setup.bat`).
1. Run the batch file(`./Server/run.bat`).
	* If you want to close the server, it is recommended that closing not the command prompt window, but the window generated by the command.

#### For Linux
1. Download or clone this repository to your machine.
1. Install [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) via a package manager. The version should be ≥6.
1. Run `npm install -g grunt grunt-cli` to install [grunt](https://gruntjs.com).
1. Install [PostgreSQL](https://www.postgresql.org/) database server via a package manager.
1. Put the SQL file(`./db.sql`) into your database.
	1. Run a command like: `sudo -u postgres psql --quiet main < ./db.sql`
1. Run the shell script file(`./server-setup.bat`). (It is a batch file for Windows but it will also work on Linux.)
1. Run these on working directory `./Server` in order:
	1. (Game server) `node lib/Game/cluster.js 0 1`
	1. (Web server) `node lib/Web/cluster.js 1`

#### Common
- You MUST edit the file(`./Server/lib/sub/global.json`) to connect to your PostgreSQL database server.
- You MUST create two files(`./Server/lib/sub/auth.json`, `./Server/lib/sub/global.json`) to turn on this server.
- This repository contains some data from [WordNet](https://wordnet.princeton.edu/). Please provide users the license of WordNet when you operate this server.
- The host `127.0.0.2` is reserved for connections between your web server and game server.
- Once the server is successfully installed, you can do just the last step of above-mentioned guideline whenever you want to run the server.
- You can open a browser and go to `127.0.0.1`(or external IP address for other people) to play **KKuTu**.
- Ranking and some session features require [Redis](https://redis.io/) server. This is optional.
- If you use Cloudflare, you should set status of DNS Tab to 'DNS only'. The status 'DNS and HTTP proxy (CDN)' could disable to open and enter to a room.

### License
- [GNU General Public License](https://github.com/JJoriping/KKuTu/blob/master/LICENSE) for all source codes in this repository.
- [Creative Commons License CC BY](https://creativecommons.org/licenses/by/4.0/) for all images and sounds in this repository.
	- But if you use these for operating KKuTu service provided by this repository, you may omit the attribution(BY).

[dev-blog]: http://blog.jjo.kr/220935346136