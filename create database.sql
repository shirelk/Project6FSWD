drop database if exists `jsonplaceholder`;
-- Create the database
CREATE DATABASE `jsonplaceholder`;

-- Use the newly created database
USE `jsonplaceholder`;

set names utf8;

-- Create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    website VARCHAR(255),
    street VARCHAR(255),
    suite VARCHAR(255),
    city VARCHAR(255),
    zipcode VARCHAR(10),
    lat DECIMAL(9,6),
    lng DECIMAL(9,6),
    companyName VARCHAR(255),
    catchPhrase VARCHAR(255),
    bs VARCHAR(255)
);

INSERT INTO users (id, name, username, email, phone, website, street, suite, city, zipcode, lat, lng, companyName, catchPhrase, bs)
VALUES
(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', '1-770-736-8031 x56442', 'hildegard.org', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', -37.3159, 81.1496, 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'),
(2, 'Ervin Howell', 'Antonette', 'Shanna@melissa.tv', '010-692-6593 x09125', 'anastasia.net', 'Victor Plains', 'Suite 879', 'Wisokyburgh', '90566-7771', -43.9509, -34.4618, 'Deckow-Crist', 'Proactive didactic contingency', 'synergize scalable supply-chains'),
(3, 'Clementine Bauch', 'Samantha', 'Nathan@yesenia.net', '1-463-123-4447', 'ramiro.info', 'Douglas Extension', 'Suite 847', 'McKenziehaven', '59590-4157', -68.6102, -47.0653, 'Romaguera-Jacobson', 'Face to face bifurcated interface', 'e-enable strategic applications'),
(4, 'Patricia Lebsack', 'Karianne', 'Julianne.OConner@kory.org', '493-170-9623 x156', 'kale.biz', 'Hoeger Mall', 'Apt. 692', 'South Elvis', '53919-4257', 29.4572, -164.2990, 'Robel-Corkery', 'Multi-tiered zero tolerance productivity', 'transition cutting-edge web services'),
(5, 'Chelsey Dietrich', 'Kamren', 'Lucio_Hettinger@annie.ca', '(254)954-1289', 'demarco.info', 'Skiles Walks', 'Suite 351', 'Roscoeview', '33263', -31.8129, 62.5342, 'Keebler LLC', 'User-centric fault-tolerant solution', 'revolutionize end-to-end systems'),
(6, 'Mrs. Dennis Schulist', 'Leopoldo_Corkery', 'Karley_Dach@jasper.info', '1-477-935-8478 x6430', 'ola.org', 'Norberto Crossing', 'Apt. 950', 'South Christy', '23505-1337', -71.4197, 71.7478, 'Considine-Lockman', 'Synchronised bottom-line interface', 'e-enable innovative applications'),
(7, 'Kurtis Weissnat', 'Elwyn.Skiles', 'Telly.Hoeger@billy.biz', '210.067.6132', 'elvis.io', 'Rex Trail', 'Suite 280', 'Howemouth', '58804-1099', 24.8918, 21.8984, 'Johns Group', 'Configurable multimedia task-force', 'generate enterprise e-tailers'),
(8, 'Nicholas Runolfsdottir V', 'Maxime_Nienow', 'Sherwood@rosamond.me', '586.493.6943 x140', 'jacynthe.com', 'Ellsworth Summit', 'Suite 729', 'Aliyaview', '45169', -14.3990, -120.7677, 'Abernathy Group', 'Implemented secondary concept', 'e-enable extensible e-tailers'),
(9, 'Glenna Reichert', 'Delphine', 'Chaim_McDermott@dana.io', '(775)976-6794 x41206', 'conrad.com', 'Dayna Park', 'Suite 449', 'Bartholomebury', '76495-3109', 24.6463, -168.8889, 'Yost and Sons', 'Switchable contextually-based project', 'aggregate real-time technologies'),
(10, 'Clementina DuBuque', 'Moriah.Stanton', 'Rey.Padberg@karina.biz', '024-648-3804', 'ambrose.net', 'Kattie Turnpike', 'Suite 198', 'Lebsackbury', '31428-2261', -38.2386, 57.2232, 'Hoeger LLC', 'Centralized empowering task-force', 'target end-to-end models');


-- Create the todos table
CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    title TEXT,
    completed BOOLEAN,
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- Insert todos for each userId
INSERT INTO todos (userId, title, completed)
VALUES
-- User ID 1
(1, 'delectus aut autem', false),
(1, 'quis ut nam facilis et officia qui', false),
(1, 'fugiat veniam minus', true),
(1, 'et porro tempora', false),
(1, 'laboriosam mollitia et enim quasi adipisci quia provident illum', false),
(1, 'qui ullam ratione quibusdam voluptatem quia omnis', true),
(1, 'illo expedita consequatur quia in', false),
(1, 'quo adipisci enim quam ut ab', false),
(1, 'molestiae perspiciatis ipsa', true),
(1, 'illo est ratione doloremque quia maiores aut', true),

-- User ID 2
(2, 'dolorum ut in voluptas mollitia et saepe quo animi', false),
(2, 'voluptatem eligendi optio', true),
(2, 'eveniet quod temporibus', false),
(2, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio', true),
(2, 'fugit voluptas sed molestias voluptatem provident', true),
(2, 'voluptate et itaque vero tempora molestiae', false),
(2, 'adipisci placeat illum aut reiciendis qui', false),
(2, 'doloribus ad provident suscipit at', true),
(2, 'asperiores ea ipsam voluptatibus modi minima quia sint', false),
(2, 'dolor sint quo a velit explicabo quia nam', true),

-- User ID 3
(3, 'temporibus vero a error', true),
(3, 'minima voluptas deserunt', false),
(3, 'reprehenderit aliquid ex ullam velit eos', true),
(3, 'doloribus sit alias ducimus vero accusamus quia voluptas', false),
(3, 'debitis vitae delectus et harum accusamus aut deleniti a', true),
(3, 'debitis dignissimos ut quo cum quod quibusdam', false),
(3, 'ratione ex tenetur perferendis', true),
(3, 'aut et excepturi dicta laudantium sint rerum nihil', false),
(3, 'quia voluptatibus voluptatem quos similique maiores repellat', true),
(3, 'autem voluptatem amet iure quae', true),

-- User ID 4
(4, 'autem doloremque totam', true),
(4, 'voluptate ex repellendus', false),
(4, 'qui fuga est a eum', false),
(4, 'modi dolorum et eveniet voluptas ipsam', true),
(4, 'eaque ut incidunt corrupti velit', true),
(4, 'quia voluptatem sunt voluptate ut ipsa', false),
(4, 'corporis veniam nostrum', false),
(4, 'debitis eius sed quibusdam non quis consectetur vitae', true),
(4, 'ut sequi qui aut minus deleniti assumenda', false),
(4, 'aut consectetur in blanditiis deserunt quia sed laboriosam', true),

-- User ID 5
(5, 'explicabo consectetur debitis voluptates quas quae culpa rerum non', false),
(5, 'maiores accusamus architecto necessitatibus reiciendis ea aut', false),
(5, 'eum non recusandae cupiditate animi', true),
(5, 'ut eum exercitationem sint', false),
(5, 'beatae et provident et ut vel', false),
(5, 'voluptas quo tenetur perspiciatis explicabo natus', true),
(5, 'aliquam aut quasi', false),
(5, 'veritatis pariatur delectus', false),
(5, 'nesciunt totam sit blanditiis sit', true),
(5, 'laborum aut in quam', false),

-- User ID 6
(6, 'non sunt voluptatem placeat consequuntur rem incidunt', false),
(6, 'eveniet pariatur quia nobis reiciendis laboriosam ea', false),
(6, 'soluta et harum aliquid officiis ab omnis consequatur', true),
(6, 'ut ex quibusdam dolore mollitia', true),
(6, 'voluptatem consequatur totam qui aut iure est vel', false),
(6, 'vel voluptatem esse consequuntur est officia quo aut quisquam', true),
(6, 'vero est optio expedita quis ut molestiae', true),
(6, 'rem pariatur facere eaque', false),
(6, 'modi totam dolor eaque et ipsum est cupiditate', false),
(6, 'ea enim temporibus asperiores placeat consectetur commodi ullam', true),

-- User ID 7
(7, 'voluptatem doloribus consectetur est ut ducimus', true),
(7, 'beatae enim quia vel', true),
(7, 'enim voluptatem quam', false),
(7, 'maxime unde repudiandae similique reiciendis harum', false),
(7, 'doloremque quia eos et ipsa doloribus', true),
(7, 'odit ipsam quas unde obcaecati molestiae consequatur', false),
(7, 'sapiente qui est quod', false),
(7, 'reprehenderit assumenda quaerat ab voluptatibus dolore', false),
(7, 'voluptatem accusantium beatae dolore et provident ducimus', true),
(7, 'ea eius consequatur non consequuntur quis explicabo nisi', true),

-- User ID 8
(8, 'fugiat aut voluptatibus corrupti deleniti velit iste odio', true),
(8, 'et provident amet rerum consectetur et voluptatum', false),
(8, 'harum ad aperiam quis', false),
(8, 'similique aut quo', false),
(8, 'laudantium eius officia perferendis provident perspiciatis asperiores', true),
(8, 'magni soluta corrupti ut maiores rem quidem', false),
(8, 'et placeat temporibus voluptas est tempora quos quibusdam', false),
(8, 'nesciunt itaque commodi tempore', true),
(8, 'omnis consequuntur cupiditate impedit itaque ipsam quo', false),
(8, 'debitis nisi et dolorem repellat et', true),

-- User ID 9
(9, 'odit et voluptates doloribus alias odio et', true),
(9, 'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut', false),
(9, 'dolore veritatis porro provident adipisci blanditiis et sunt', true),
(9, 'placeat quia et porro iste', false),
(9, 'nostrum quis quasi placeat', true),
(9, 'sapiente omnis fugit eos', true),
(9, 'sint soluta et vel magnam aut ut sed qui', false),
(9, 'ad iusto omnis odit dolor voluptatibus', false),
(9, 'aut amet sed', true),
(9, 'ratione ex tenetur perferendis', true),

-- User ID 10
(10, 'quod minus alias quos', true),
(10, 'repudiandae dolorum quae', false),
(10, 'ab voluptatum amet voluptas', false),
(10, 'accusamus repellendus deleniti vel. Molestiae porro', false),
(10, 'rerum ex veniam mollitia voluptatibus pariatur', true),
(10, 'consequuntur aut ut fugit similique', false),
(10, 'dignissimos quo nobis earum saepe', true),
(10, 'quis eius est sint explicabo', false),
(10, 'numquam repellendus a magnam', false),
(10, 'ipsam aperiam voluptates qui', true);

-- Create the posts table
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    title VARCHAR(255),
    body TEXT,
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- Insert posts from the JSON API into the posts table
INSERT INTO posts ( userId, title, body)
VALUES
-- User ID 1
(1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'),
(1, 'qui est esse', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(1, 'ea molestias quasi exercitationem repellat qui ipsa sit aut', 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'),
(1, 'eum et est occaecati', 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'),
(1, 'nesciunt quas odio', 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'),
(1, 'dolorem eum magni eos aperiam quia', 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'),
(1, 'magnam facilis autem', 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'),
(1, 'dolorem dolore est ipsam', 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'),
(1, 'nesciunt iure omnis dolorem tempora et accusantium', 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'),
(1, 'optio molestias id quia eum', 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'),
-- User ID 2
(2, 'et ea vero quia laudantium autem', 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'),
(2, 'in quibusdam tempore odit est dolorem', 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'),
(2, 'dolorum ut in voluptas mollitia et saepe quo animi', 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam'),
(2, 'voluptatem eligendi optio', 'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\naut fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(2, 'eveniet quod temporibus', 'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'),
(2, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio', 'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta'),
(2, 'fugit voluptas sed molestias voluptatem provident', 'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo'),
(2, 'voluptate et itaque vero tempora molestiae', 'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam'),
(2, 'adipisci placeat illum aut reiciendis qui', 'illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas'),
(2, 'doloribus ad provident suscipit at', '"qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo'),
-- User ID 3
(3, 'asperiores ea ipsam voluptatibus modi minima quia sint', 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntenetur recusandae nihil'),
(3, 'dolor sint quo a velit explicabo quia nam', 'eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse'),
(3, 'maxime id vitae nihil numquam', 'veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis'),
(3, 'autem hic labore sunt dolores incidunt', 'enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt'),
(3, 'rem alias distinctio quo quis', 'ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio'),
(3, 'est et quae odit qui non', 'similique harum iste ipsam non dolores facere esse\net beatae qui\naspernatur quo cupiditate\nmolestiae doloremque velit et dolorem'),
(3, 'quasi id et eos tenetur aut quo autem', 'eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur'),
(3, 'delectus ullam et corporis nulla voluptas sequi', 'veniam autem quis nostrum\nexpedita voluptatum culpa assumenda\nvitae consectetur debitis dolore voluptates ut voluptatem\nvero impedit ratione'),
(3, 'iusto eius quod necessitatibus culpa ea', 'odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores'),
(3, 'a quo magni similique perferendis', 'alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia'),
-- User ID 4
(4, 'ullam ut quidem id aut vel consequuntur', 'debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae'),
(4, 'doloremque illum aliquid sunt', 'deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas'),
(4, 'qui explicabo molestiae dolorem', 'rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi'),
(4, 'magnam ut rerum iure', 'id nihil consequatur molestias animi provident\nomnis molestiae rerum eius et\nnemo aperiam excepturi delectus non sunt\nqui vel recusandae consequuntur voluptates'),
(4, 'id nihil consequatur molestias animi', 'veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis'),
(4, 'ipsam ut labore voluptatem quis id velit sunt', 'sunt veritatis ut voluptate qui\naspernatur hic fugiat nemo qui\nquo nisi nesciunt quas odio\nrerum ea est molestias'),
(4, 'laborum aut in quam', 'unde tempora quo reprehenderit\nvoluptatem accusamus vel dolor\niusto reprehenderit nesciunt est cupiditate\nquasi enim fugit minus nemo aperiam voluptur'),
(4, 'eius dolorem accusamus ullam vero', 'minus fugit perferendis labore molestias id\nexvoluptatum officiis saepe quod qui sunt\nest autem sunt\nnam debitis aut hic sint veniam'),
(4, 'neque debitis aperiam nisi ut esse', 'animi saepe dolorem enim\nmolestiae qui saepe hic voluptate\nsed sequi sint officiis est dolorum\nmolestiae odio id qui doloribus deleniti ea'),
(4, 'autem hic labore sunt dolores incidunt', 'enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt'),
-- User ID 5
(5, 'explicabo consectetur debitis voluptates quas quae culpa rerum non', 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'),
(5, 'maiores accusamus architecto necessitatibus reiciendis ea aut', 'ad et natus qui\nab eum voluptas excepturi\nquia iste autem nulla illum\nexcepturi tempora voluptatem sit molestiae doloremque'),
(5, 'eum non recusandae cupiditate animi', 'natus dignissimos veniam sint ullam\nvero repudiandae voluptatem voluptatem voluptas\nerrorecum est aut consequatur dignissimos distinctio laboriosam\nid quidem voluptas'),
(5, 'ut eum amet non hic ex', 'molestiae qui molestiae officia recusandae qui\nipsam architecto velit sit\nmollitia aut amet\nnam autem velit officia quae quis numquam'),
(5, 'sit error blanditiis ut enim ea accusantium', 'est fugit voluptas qui eveniet\nquo nihil ratione magni\nnon sunt voluptatem commodi\nquisquam et deserunt sint et aut'),
(5, 'temporibus atque distinctio omnis eius impedit tempore molestias pariatur', 'et eos ducimus\nvoluptatem et accusamus\net quod officia odit\nquisquam est cum dolorem'),
(5, 'ut numquam possimus omnis eius suscipit laudantium iure', 'est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem'),
(5, 'aut quo modi neque nostrum ducimus', 'voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid'),
(5, 'quibusdam cumque rem aut deserunt', 'voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid'),
(5, 'laudantium quibusdam inventore', 'voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid'),
-- User ID 6
(6, 'soluta aliquam aperiam consequatur illo quis voluptas', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
(6, 'qui enim et consequuntur quia animi quis voluptatem', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
(6, 'quibusdam facilis doloribus debitis est', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
(6, 'itaque voluptates iusto corrupti voluptatum velit assumenda', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
(6, 'quibusdam facilis doloribus debitis est', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
(6, 'itaque voluptates iusto corrupti voluptatum velit assumenda', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
(6, 'quibusdam facilis doloribus debitis est', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
(6, 'itaque voluptates iusto corrupti voluptatum velit assumenda', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
(6, 'quibusdam facilis doloribus debitis est', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
(6, 'itaque voluptates iusto corrupti voluptatum velit assumenda', 'qui enim et consequuntur quia animi quis voluptatem\nquibusdam facilis doloribus debitis est\nitaque voluptates\niusto corrupti voluptatum velit assumenda'),
-- User ID 7
(7, 'consequatur nihil minima quo labore iste', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
(7, 'eos accusamus illum sunt consequatur qui', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
(7, 'qui sunt esse', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
(7, 'est ratione molestiae modi maiores qui', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
(7, 'sunt aut quae laboriosam sit ut', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
(7, 'quo qui vel exercitationem', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
(7, 'aut est autem sunt rem eveniet', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
(7, 'ratione molestiae modi maiores qui', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
(7, 'quo qui vel exercitationem', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
(7, 'aut est autem sunt rem eveniet', 'et quae iusto sed\nmaxime ut numquam sequi\nullam quia quis\ndistinctio neque magni facilis et'),
-- User ID 8
(8, 'qui est esse', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(8, 'sint sit aut vero', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(8, 'porro aut necessitatibus eaque distinctio', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(8, 'repellendus veritatis molestias dicta incidunt', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(8, 'officia porro iure quia iusto qui ipsa ut modi', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(8, 'perferendis qui velit id', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(8, 'quia voluptatibus voluptatem quos similique maiores repellat', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(8, 'aut vero est dolor non aut excepturi dignissimos', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(8, 'sed quia eos qui repudiandae ad', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(8, 'quibusdam autem aliquid et et quia', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
-- User ID 9
(9, 'qui est esse', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(9, 'sint sit aut vero', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(9, 'porro aut necessitatibus eaque distinctio', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(9, 'repellendus veritatis molestias dicta incidunt', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(9, 'officia porro iure quia iusto qui ipsa ut modi', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(9, 'perferendis qui velit id', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(9, 'quia voluptatibus voluptatem quos similique maiores repellat', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(9, 'aut vero est dolor non aut excepturi dignissimos', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(9, 'sed quia eos qui repudiandae ad', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(9, 'quibusdam autem aliquid et et quia', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
-- User ID 10
(10, 'qui est esse', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(10, 'sint sit aut vero', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(10, 'porro aut necessitatibus eaque distinctio', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(10, 'repellendus veritatis molestias dicta incidunt', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(10, 'officia porro iure quia iusto qui ipsa ut modi', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(10, 'perferendis qui velit id', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(10, 'quia voluptatibus voluptatem quos similique maiores repellat', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(10, 'aut vero est dolor non aut excepturi dignissimos', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(10, 'sed quia eos qui repudiandae ad', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'),
(10, 'quibusdam autem aliquid et et quia', 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla');

-- Create the comments table
CREATE TABLE comments (
    postId INT,
    id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    body TEXT,
    FOREIGN KEY (postId) REFERENCES posts(id)
);

INSERT INTO comments (postId, id, name, email, body)
VALUES
(1, 1, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(1, 2, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(1, 3, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
(2, 4, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(2, 5, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(2, 6, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
(3, 7, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(3, 8, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(3, 9, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
(4, 10, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(4, 11, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(4, 12, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
(5, 13, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(5, 14, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(5, 15, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
(6, 16, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(6, 17, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(6, 18, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
(7, 19, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(7, 20, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(7, 21, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
(8, 22, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(8, 23, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(8, 24, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
(9, 25, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(9, 26, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(9, 27, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'),
(10, 28, 'id labore ex et quam laborum', 'Eliseo@gardner.biz', 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'),
(10, 29, 'quo vero reiciendis velit similique earum', 'Jayne_Kuhic@sydney.com', 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'),
(10, 30, 'odio adipisci rerum aut animi', 'Nikita@garfield.biz', 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione');

-- Create the albums table
CREATE TABLE albums (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    title VARCHAR(255),
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- User ID 1
INSERT INTO albums (userId, title)
VALUES
(1, 'quidem molestiae enim'),
(1, 'sunt qui excepturi placeat culpa'),
(1, 'omnis laborum odio');

-- User ID 2
INSERT INTO albums (userId, title)
VALUES
(2, 'aspernatur autem et odit'),
(2, 'fugit voluptas sed molestias'),
(2, 'quo laboriosam deleniti');

-- User ID 3
INSERT INTO albums (userId, title)
VALUES
(3, 'doloribus natus ut'),
(3, 'voluptatum animi amet'),
(3, 'eum voluptate dolor');

-- User ID 4
INSERT INTO albums (userId, title)
VALUES
(4, 'recusandae dolor similique'),
(4, 'aperiam sed deserunt'),
(4, 'quisquam molestiae qui');

-- User ID 5
INSERT INTO albums (userId, title)
VALUES
(5, 'distinctio laborum autem'),
(5, 'reprehenderit est consectetur'),
(5, 'non quia qui');

-- User ID 6
INSERT INTO albums (userId, title)
VALUES
(6, 'dolores molestiae sed'),
(6, 'repudiandae totam optio'),
(6, 'voluptas quisquam maxime');

-- User ID 7
INSERT INTO albums (userId, title)
VALUES
(7, 'deleniti dolore occaecati'),
(7, 'repellendus nemo aut'),
(7, 'quaerat soluta ut');

-- User ID 8
INSERT INTO albums (userId, title)
VALUES
(8, 'repellat doloribus quae'),
(8, 'in consequatur rerum'),
(8, 'temporibus magni maiores');

-- User ID 9
INSERT INTO albums (userId, title)
VALUES
(9, 'maxime id vitae'),
(9, 'unde et iusto'),
(9, 'corporis libero velit');

-- User ID 10
INSERT INTO albums (userId, title)
VALUES
    (10, 'voluptatum animi quo'),
    (10, 'atque cupiditate sed'),
    (10, 'tempora dolorum alias');


CREATE TABLE photos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    albumId INT,
    title VARCHAR(255),
    url VARCHAR(255),
    thumbnailUrl VARCHAR(255),
    FOREIGN KEY (albumId) REFERENCES albums(id)
);

INSERT INTO photos (albumId, title, url, thumbnailUrl)
VALUES
(1, 'accusamus beatae ad facilis cum similique qui sunt', 'https://via.placeholder.com/600/92c952', 'https://via.placeholder.com/150/92c952'),
(1, 'repellat consequatur praesentium vel minus molestias voluptatum', 'https://via.placeholder.com/600/771796', 'https://via.placeholder.com/150/771796'),
(1, 'ullam ut quidem id aut vel consequuntur', 'https://via.placeholder.com/600/24f355', 'https://via.placeholder.com/150/24f355'),
(1, 'doloribus ad provident suscipit at', 'https://via.placeholder.com/600/d32776', 'https://via.placeholder.com/150/d32776'),
(1, 'asperiores ea ipsam voluptatibus modi minima quia sint', 'https://via.placeholder.com/600/f66b97', 'https://via.placeholder.com/150/f66b97'),

-- Album ID 2
(2, 'et fugit eligendi deleniti quidem qui sint nihil autem', 'https://via.placeholder.com/600/56a8c2', 'https://via.placeholder.com/150/56a8c2'),
(2, 'repellendus sunt dolores architecto voluptatum', 'https://via.placeholder.com/600/b0f7cc', 'https://via.placeholder.com/150/b0f7cc'),
(2, 'et omnis dolorem', 'https://via.placeholder.com/600/54176f', 'https://via.placeholder.com/150/54176f'),
(2, 'provident id voluptas', 'https://via.placeholder.com/600/51aa97', 'https://via.placeholder.com/150/51aa97'),
(2, 'eaque et deleniti atque tenetur ut quo ut', 'https://via.placeholder.com/600/810b14', 'https://via.placeholder.com/150/810b14'),

-- Album ID 3
(3, 'fugit labore quia mollitia quas deserunt nostrum sunt', 'https://via.placeholder.com/600/1ee8a4', 'https://via.placeholder.com/150/1ee8a4'),
(3, 'modi ut eos dolores illum nam dolor', 'https://via.placeholder.com/600/66b7d2', 'https://via.placeholder.com/150/66b7d2'),
(3, 'aut inventore non pariatur sit vitae voluptatem sapiente', 'https://via.placeholder.com/600/197d29', 'https://via.placeholder.com/150/197d29'),
(3, 'et officiis id praesentium hic aut ipsa dolorem repudiandae', 'https://via.placeholder.com/600/61a65', 'https://via.placeholder.com/150/61a65'),
(3, 'debitis magnam hic odit aut ullam nostrum tenetur', 'https://via.placeholder.com/600/f9cee5', 'https://via.placeholder.com/150/f9cee5'),

-- Album ID 4
(4, 'debitis magnam hic odit aut ullam nostrum tenetur', 'https://via.placeholder.com/600/fdf73e', 'https://via.placeholder.com/150/fdf73e'),
(4, 'ut numquam possimus omnis eius suscipit laudantium iure', 'https://via.placeholder.com/600/9c184f', 'https://via.placeholder.com/150/9c184f'),
(4, 'aut quo modi neque nostrum ducimus', 'https://via.placeholder.com/600/1fe46f', 'https://via.placeholder.com/150/1fe46f'),
(4, 'quibusdam cumque rem aut deserunt', 'https://via.placeholder.com/600/56acb2', 'https://via.placeholder.com/150/56acb2'),
(4, 'laudantium quibusdam inventore', 'https://via.placeholder.com/600/8985dc', 'https://via.placeholder.com/150/8985dc'),

-- Album ID 5
(5, 'hic inventore sint aut', 'https://via.placeholder.com/600/5e12c6', 'https://via.placeholder.com/150/5e12c6'),
(5, 'enim asperiores illum', 'https://via.placeholder.com/600/45601a', 'https://via.placeholder.com/150/45601a'),
(5, 'et dolor error doloremque', 'https://via.placeholder.com/600/e924e6', 'https://via.placeholder.com/150/e924e6'),
(5, 'ad cupiditate labore', 'https://via.placeholder.com/600/8f209a', 'https://via.placeholder.com/150/8f209a'),
(5, 'minus laboriosam consequuntur', 'https://via.placeholder.com/600/5e3a73', 'https://via.placeholder.com/150/5e3a73'),

-- Album ID 6
(6, 'minus laboriosam consequuntur', 'https://via.placeholder.com/600/474645', 'https://via.placeholder.com/150/474645'),
(6, 'quo dolore nihil quia', 'https://via.placeholder.com/600/6826ae', 'https://via.placeholder.com/150/6826ae'),
(6, 'est pariatur similique quod voluptas et consequuntur nam molestiae', 'https://via.placeholder.com/600/150bae', 'https://via.placeholder.com/150/150bae'),
(6, 'exercitationem doloribus at', 'https://via.placeholder.com/600/4f0aec', 'https://via.placeholder.com/150/4f0aec'),
(6, 'non quia odio', 'https://via.placeholder.com/600/cdfc1d', 'https://via.placeholder.com/150/cdfc1d'),

-- Album ID 7
(7, 'non quia odio', 'https://via.placeholder.com/600/250289', 'https://via.placeholder.com/150/250289'),
(7, 'aut quia et corporis voluptas quisquam voluptatem', 'https://via.placeholder.com/600/2bcbba', 'https://via.placeholder.com/150/2bcbba'),
(7, 'et eum provident maxime beatae minus et doloremque perspiciatis', 'https://via.placeholder.com/600/aa8f2e', 'https://via.placeholder.com/150/aa8f2e'),
(7, 'eos dolorem iste accusantium est eaque quam', 'https://via.placeholder.com/600/df462e', 'https://via.placeholder.com/150/df462e'),
(7, 'accusantium qui sequi', 'https://via.placeholder.com/600/6552e5', 'https://via.placeholder.com/150/6552e5'),

-- Album ID 8
(8, 'accusantium qui sequi', 'https://via.placeholder.com/600/e65efe', 'https://via.placeholder.com/150/e65efe'),
(8, 'illum et alias quidem magni voluptatum quae', 'https://via.placeholder.com/600/f66f71', 'https://via.placeholder.com/150/f66f71'),
(8, 'sint enim earum', 'https://via.placeholder.com/600/7e1e85', 'https://via.placeholder.com/150/7e1e85'),
(8, 'beatae incidunt sequi qui', 'https://via.placeholder.com/600/7b227b', 'https://via.placeholder.com/150/7b227b'),
(8, 'molestiae magnam et rerum', 'https://via.placeholder.com/600/9fb4f9', 'https://via.placeholder.com/150/9fb4f9'),

-- Album ID 9
(9, 'molestiae magnam et rerum', 'https://via.placeholder.com/600/9c8661', 'https://via.placeholder.com/150/9c8661'),
(9, 'esse rem ut neque magni voluptatem id qui', 'https://via.placeholder.com/600/559a3e', 'https://via.placeholder.com/150/559a3e'),
(9, 'sequi ut omnis et', 'https://via.placeholder.com/600/7684e8', 'https://via.placeholder.com/150/7684e8'),
(9, 'molestiae nisi accusantium tenetur dolorem et', 'https://via.placeholder.com/600/8bcbc1', 'https://via.placeholder.com/150/8bcbc1'),
(9, 'nulla quis consequatur saepe qui id expedita', 'https://via.placeholder.com/600/9c8f4b', 'https://via.placeholder.com/150/9c8f4b'),

-- Album ID 10
(10, 'nulla quis consequatur saepe qui id expedita', 'https://via.placeholder.com/600/5e27e9', 'https://via.placeholder.com/150/5e27e9'),
(10, 'in omnis laboriosam', 'https://via.placeholder.com/600/6fcd28', 'https://via.placeholder.com/150/6fcd28'),
(10, 'odio iure consequatur molestiae quibusdam necessitatibus quia sint', 'https://via.placeholder.com/600/6ad437', 'https://via.placeholder.com/150/6ad437'),
(10, 'facilis modi saepe mollitia', 'https://via.placeholder.com/600/91b8ede', 'https://via.placeholder.com/150/91b8ede'),
(10, 'vel nihil et molestiae iusto assumenda nemo quo ut', 'https://via.placeholder.com/600/0fd8fe', 'https://via.placeholder.com/150/0fd8fe');


CREATE TABLE users_passwords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    last_pw BOOLEAN,
    FOREIGN KEY (userId) REFERENCES users(id)
);

INSERT INTO users_passwords (userId, username, password, last_pw)
VALUES
(1, 'Bret',3159, true),
(2, 'Antonette', 9509, true),
(3, 'Samantha', 6102, true),
(4, 'Karianne', 4572, true),
(5, 'Kamren', 8129, true),
(6, 'Leopoldo_Corkery', 4197, true),
(7, 'Elwyn.Skiles', 8918, true),
(8, 'Maxime_Nienow',3990, true),
(9, 'Delphine', 6463, true),
(10, 'Moriah.Stanton', 2386, true);

