'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bfa42ec333cd9463da9a5161559cb568",
"index.html": "96b274a2f511f8a93334db49606b3e3d",
"/": "96b274a2f511f8a93334db49606b3e3d",
"main.dart.js": "d698ab9240fee1802b72f03152a6699f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"Logo.png": "62c719171f760c9bd5815c0e677a8e30",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7fe8856570c9dfbf611d47c37584f68e",
".git/config": "4995971a677f2898c60d953d9d534b59",
".git/objects/61/68047842f2398ac8256a76122b04a4089ecf50": "bc43f45d1c8811da51d23a462fa012ba",
".git/objects/61/fb38f96ea475ae6b76c2dbc7347a27b374eccf": "fa87bee71beba8395f6e350412ecc036",
".git/objects/61/89ede9d944c8428033c8ea85f51c1ccf4e110a": "9c562d06e4bbbf426d0c441a63f6df7c",
".git/objects/0d/4058583b751927461a113b8d12485b11aa72c2": "39350f3c66d90ca0a6adfd9fd0e76ecd",
".git/objects/66/b9e515c93b0ff863c26a0bb5b4b40f8a21a1aa": "2d65bdabf50891adda2fd0cc57ff5c9c",
".git/objects/66/c622df45ad6cb9297daf69f3fea0b7bdda6481": "4c415fe9184c68c53172aa6fa02bdadd",
".git/objects/50/0ed2f54bec47130094bbf5d2f6a1c01aeb1f2b": "3ac399e82dc535190092ad3c0e65494f",
".git/objects/68/87ef035ab9e1b45af29a59ee65217153165795": "bd95bb18d62a0f7e70aaa77ff2333d4f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/6bb9b52f0a867f69bb587013d4c0a56e0f2eb8": "9ea9c630c2d77f2fcf5aac1ffebb4740",
".git/objects/56/f946ade51cc7b986a9eba3b84f8f342e0c91a9": "6e116662adda8cd41a1986ae4c87113a",
".git/objects/56/e8586d3ada177fe0346fe30aee60b972f19b82": "3fb7d187d226bd47de4500f7f40c464d",
".git/objects/3d/2154fbb9e23b26cd01f79b5480a289f70e4d8c": "c7dd09d7183a73840fec6aa88305ac92",
".git/objects/3d/6eedb9c1957d1d98d6485ce5a6b5c5a715db7a": "d0e3250578eb47be9722fecfec3c7c8a",
".git/objects/60/cc4899055580b3362e908c387404027e7c2db2": "532df74ceb11a2e7efb276bb11dc5be5",
".git/objects/5f/6311a88a410750cd55f8c69326f84113c8e13e": "44795046a700f45ac546aa8e78b52975",
".git/objects/05/3a8a4674ca78959ab3ece27790619e37933a6e": "c5419926fbc706d08b1f280f4cde9455",
".git/objects/9d/22a785e41665895425c5e118bbfc1c0e1ddeb6": "86e164d5871a95ef13116bc2a67b9c8c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/5efa9b908e81656cf5f7ffeaff8eafea3650c7": "c6c1d32f59510f222c5c0f8597328ec4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/a9ccf7520b0f2a50b8b1969830e6d274c14102": "d2c3a3a416ff29bbf29ad7656b383f24",
".git/objects/b4/e0cb7286f797c463579b3bb4d3dfc2279217f4": "1be5f36f9a66fd2a118ed0510d8eedad",
".git/objects/d1/727eeeb660754b8492d7e05e27c95b85b358c1": "fc2b1cbe06333ce16809f7ad30708306",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/471989bbe1949e067fa425e8c101c7623c8c1d": "31d435a5ec9e79d25e7da7083db95779",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/d4d30cb8e6fd5a31aa666f8e9c7649c9efef0f": "7c02b8438f94ce76d1cafe08cbbe284e",
".git/objects/f5/25461ffa92aa116a30f853c07d130df4269045": "781f9c84c66130a3fdd28ab090733378",
".git/objects/cf/68dba51e2aaca21642b827d71fc7c19af08c59": "9dd2ebe47e3de9924c014007b0f5673e",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/27/b54767fc8cc10ac540cb2f985fb8dec96f763b": "9446365c36dd398d2dd99f2ed2dbefd8",
".git/objects/89/e2dab331a7c5fbeb21655dddeafceb3d0023bb": "98835296f842f4907225a0ba91521a5f",
".git/objects/89/ac8f89d15752af21059cfe8223df13ca308725": "873eb10395bb46b030ed0e4bf928bbcd",
".git/objects/45/94794c7554103c67cb1bb409f53c906b5c9677": "3819f8d68a210ce310f84605f3dfa86d",
".git/objects/1f/90f44ef99ff5b2b1152f0a1690586f2335ef57": "67cc207d646d91c5df8babc21c67e58c",
".git/objects/87/4cc486f3cbab4a7ab9f87043d2f1860aa267b3": "69ace57432d0bd63048bdd1b774eafeb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/2b960b5d8fcd8b9ee7398d6c2221cc2ebab5d7": "c409e89c587d6114a5e20420b0e3813b",
".git/objects/19/4109d375a3ca7b8645d6d4350b10b63ecec3ad": "86954dfeaaf8520b7f8198df7c1920ba",
".git/objects/19/1c757f42c0d0b97dfc1937d80a5e0b73c95837": "706f74f69803b5786e2b846a0f712efc",
".git/objects/4c/ec72cad47902348b6a5ee484bb3000e8c95e2a": "eeab7dd8c79e103f3fd8cd55da54f36d",
".git/objects/4c/be2bf3b095af6555dd6238b2b9e5e537ee9c3c": "a16137c5fda20a7f0bfd490334959cfa",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/21/0e1ec6254d9d82523950964302e4def1bf3a24": "962fed7b01e2feb9e6b9e711d7886393",
".git/objects/21/2973e44edefd758f545bd30cb8539b1cf71f8c": "fd154e98108eff35b0d0a240f8c56b16",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/86/00d30fe79688d8f7b571a7b99b8e524fca5b56": "d2ecaf8664c628f2cf191f1c74cf7646",
".git/objects/43/8dd98753ba1554366894966ce768328118aa78": "a190732f3f161150002c67c09792f29f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/465354e313fa9c50b6e81322dd8e6f8b905f89": "24dd5f32d77501d27a54fa88a5766050",
".git/objects/07/e37fe7364a609b2ce37f1c769e790cc92e50e1": "6f5cae197c456381580983d3bfe9461d",
".git/objects/38/45c73266dbf64d869a5a629d6a67c4f8081e53": "56c05d7199c59575fd7fa656a03a0ad7",
".git/objects/38/285d2ed6eeef30b431c8685c0a3615b035a684": "0c5936c6c564ebff3d55c72b4234b95a",
".git/objects/00/bf0dc5887131d065cbcdd45b4014ec5f406602": "45600266a40f57841d060b69cd60391e",
".git/objects/00/aa5eec9774af1fc79220d9f2085d0df2798d80": "bd5ee9eb48c607112eeae81d12ddd0f9",
".git/objects/9a/bc837b2f16b0b9aadbc498ed12fc945c25c7c3": "27137e100fec42484983e08060082d66",
".git/objects/9a/510fac53c309b1fc250bcbe5ae729eede6c18e": "589679d592a9603870dc9cd25639afea",
".git/objects/9a/a0f2f75dad9041dc8ba6cf88fcfcc9e1785d3f": "394afbf51bb8f845846620e91e89cbe8",
".git/objects/36/81c36026656eb88190eab43b9d49f1f57af187": "f47b69eb342b93c779cb12baf054b29a",
".git/objects/5d/045845f6929c01e8acc6ebf23c610c3b061193": "972bfc4a401eaeea27798baad3d78d95",
".git/objects/65/2394199fd85f7a943c43f87ac444734cec8eb7": "becd02c25a61380119ca20929afe5fea",
".git/objects/62/e07fbdfedd47b1932f08f317fd6317516ba2c3": "2c572f5f7f434e158755b6958665600a",
".git/objects/3a/4b3a7615afc9c6439fa973fb836213dd4c4a57": "7187c25cb6dc38b81c0fc8ac8b83a322",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/08/fe25c9b56c945bdd90272b42764d8bd5fe37c8": "829239d7aa62b61e9fa06a4bf8f0415b",
".git/objects/08/480129e46f2bed987ba0af6f33ddd1d0b1e489": "f714657b7d8da3f71e4d9a1077b94893",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/793b19eb61026a2ee22e1d439f22b3668db66d": "a6ab033b241096766bda90ba873a08ce",
".git/objects/06/f3b82e30bcf412f9e320e1cf3c2d21dff8fe7d": "c8a385ec6be375c1d1942a00ba5cc481",
".git/objects/06/cef86d8ef7749f328c68bc0289c53a75f46dec": "e62c72e074d8050f1c5953ca5a02709f",
".git/objects/52/2f0c9edc3ee52830c2c2d3eb6bb3661f0ab1df": "81061933e3dcfeb7cff4ca8badb85e89",
".git/objects/d3/c56629547199ea23aa6934453b74e9763b003e": "dc92140912746e6097a98a329885e8bc",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/87d0f6c4c70b8bb740305033048abf1b561b5a": "7db8317d015d705e818fc6602fc359d3",
".git/objects/d4/e95a93d33abb745d0fe214f91ebc90bad87c1f": "60bec7a0893659dfd85c1dd07b5dc202",
".git/objects/ba/cbbd6636ce4d775827af21131987e9db3f1ae0": "130b9eaaaf2ba8f9893db4b7f0ddff1a",
".git/objects/a7/d24de30999104a299b0a89568a865066eac7cc": "ccaf784529fe9779ad5b4a2d4930f31d",
".git/objects/a7/a59c32cae8c22886800094d81e5a4d2b8fd646": "cf66b92ea22e9c13c13c4516c8680f02",
".git/objects/d5/16bee8dac30ae4fbf45eab6eb3424d6b3da98b": "7f0199f6be336b5b9d93229f658f5120",
".git/objects/d5/f1fcc6692879ac57a87e42b00aaeed53e04225": "967e97b5a8a3f43b11bb37ad3b823415",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/e893cf44d1a0bc7fe29b43c2c7fdd460f6e842": "656f3fdee41fbd60044c8975c6b948a5",
".git/objects/af/4a9f50fc7ac68f41a01eb3d3c7dfd724d6e427": "ce24fa79c67e23ad391e6293eea6d1d9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a7bd950032ab6e4bf7f4b1aa08f2820cb1e7f9": "3f5bc7d27c106d82ea97ed443987c4ae",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/2ce1e4ce1fc553e5937b17b337cb878cdad661": "155d28ef9ca7a981f33f4b8211127f4c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/726c8613c57d97a276c2487325fd1ccba94827": "374187bddfb1b1d69340a430855338bc",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/a93a0bec93dab5bb4c7933ef97e7a6870ec526": "76433a937407f13c1c1a7674d619fcf2",
".git/objects/ff/d83262d579e62361d20b219e3ef95e0f0832c5": "de5884bb19e46685e3825678f539c35d",
".git/objects/e9/bee897f5fa3664c138d330c297431723335499": "24f898c9a98f83af08164e47dd85d3ab",
".git/objects/e7/1d041cab983fa0b5aee876a67342a458f1ca98": "3497eb53237307c1fea05a7de65c1959",
".git/objects/f8/c65fd337f352a8ab1323d1a7b7d7fb7fbb21c6": "8243fb9581e6038fdf9444c09135582a",
".git/objects/ce/1c21c2ee8607002639344ba9f77b637f46b93b": "58361b38df3ff882ccfc7366bf083d8f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/8d5f89e93c3de5d7037f7875ac7cc05a0a044a": "2f281c278c51e660d6a832fc24c1f2bf",
".git/objects/84/f5859c832d2a7b8b5da18c01b0faa2ed7dbda8": "640d77640be14dc5c33729ffdb4684d0",
".git/objects/8d/0c607495d3f6da46e7a5b9cd950aa9ff3d526f": "22825f47436333e37f21fe71860fd7ea",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1c/317c346055e24d4d751f2ae9be233a21123d63": "991b5225b3e742999405a515e397e4e7",
".git/objects/82/a4d502edc4c350e3e0681bddd0a70b89edb8af": "864dd6d7a2b0ac71b83e83d67ec0f23f",
".git/objects/40/f827c6ffa8779ffe5719a9948ad8dcbe7ef8f4": "a92ffb307488a1419f189de062f0f468",
".git/objects/40/bbe57942803ea761cee72a2c1ffc2d369dde8e": "875fdf83b4daa624d57e43d963162c9b",
".git/objects/2e/b52fcdbc86daa04699ffacf41cebd722c6ba5f": "dff175ccd6f3dc1d379a64bba74c71bb",
".git/objects/47/6db1bd47725cdb8396068eb4d6e648271800b4": "26c3f89b6aedc856a18a390c4928b33d",
".git/objects/7f/681c55496c31004e604f843699fbed9bbf1ef3": "9d77ed4c639fd1caea21319930d05db3",
".git/objects/14/6d906978776d1fd67cf3cc09d16100f5f086c3": "b447a40fc7515916a046ed9327f2f61a",
".git/objects/8e/c43e32f7896fb34ee9fbf0aa06985302ee7c4b": "09af34a5a1778aae30746ebdf06ecf53",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfcfa86cedc13c0e286a8161e85f4756",
".git/logs/refs/heads/main": "6cf8731a0bbb8b61a7c42b1df72816ab",
".git/logs/refs/remotes/origin/main": "05c4f97212eedafaafe7326bbec168ae",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "fb0261ff1ab514fe35a38c092e84d2a1",
".git/refs/remotes/origin/main": "fb0261ff1ab514fe35a38c092e84d2a1",
".git/index": "13482d9cd441dc199c3cdbd7bc7682fb",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/images/email.png": "70b9fa4857d06dac3608d6ac2fcafffc",
"assets/images/plant.png": "d2ee635b916cea470df3737f0623c124",
"assets/images/game.png": "3685021a6f05fddbbaefc9765ffc015c",
"assets/images/Spotify.jpeg": "86cf86d727796ff395e069145ec788c0",
"assets/images/evnt.png": "02e104c238926bd78dfaf158c100f87c",
"assets/images/Instagram.png": "b9ac166c5638cc917589a28a293fa489",
"assets/images/hill4.png": "258b5e6d4fd0b88f5bf98317a6af5990",
"assets/images/github.png": "c09bda950f64f3756a0af0e06c6ac382",
"assets/images/hill5.png": "0a3129bde9d1a72060dc34e7c18b5712",
"assets/images/hill1.png": "9162cb2ac60a768baa2e2f45c8096dab",
"assets/images/Vupdate.jpg": "5b482d3705d251cb43a18cad0e474bb0",
"assets/images/hill2.png": "e3c4a80faca44db94140d8568d3c969e",
"assets/images/appStore.png": "85f609d28e9d510751a34915f7416cf1",
"assets/images/hill3.png": "392b56625adc6da5b43e35a875273c6f",
"assets/images/twitter.png": "0c650c366148b41599e274ed46ec3dce",
"assets/images/tree.png": "ddc37c0879639ea52887b09afe2c13b7",
"assets/images/LinkedIn.png": "5ff9090d646b8d430461fbe4060c13ef",
"assets/images/MyImg.png": "c35a473cf779f7ae1074ce4888e9e39f",
"assets/images/tik.svg.png": "a3fe0197e3fdd16263c5f97d732a98ba",
"assets/images/Stocks.jpeg": "91c06ad87f8515a6e5a0809f3c5a3256",
"assets/images/see_you_again.png": "183598774d18a2cb456683d83f033d93",
"assets/images/presem.png": "1e24bbf272104c21215fb82e776e5cbe",
"assets/AssetManifest.json": "4323ee16552c832216372390d1c3b28c",
"assets/NOTICES": "5686ba451b96ac6f68d9636bffd48bfe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c174c504c49d9402a0a3e3fb904976e7",
"assets/fonts/MaterialIcons-Regular.otf": "0ab3065a339515a6eb10a6eb16681e76",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
