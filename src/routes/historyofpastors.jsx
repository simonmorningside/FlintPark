import React from 'react';
import '../App.css';
import './historyofpastors.css';

export default function HistoryOfPastors() {
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState({ images: [], videos: [] });

  useEffect(() => {
    // Fetch media data from the API
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://floral-park-webserver-861401374674.us-central1.run.app/api/churches'); // Update to the correct API URL if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch media data');
        }
        const data = await response.json();
        console.log('Fetched Media Data:', data); // Log the fetched data to the console
        setMedia(data);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);


  return (
    <div className="page-container">
      <header className="header">
        <div className="header-content">
        {media.images.length > 0 && (
            <img
              src={media.images[0].url}
              alt="Church Logo"
              className="header-logo"
            />
          )}
          <h1>History of Pastors at Mount Olive Missionary Baptist Church</h1>
        </div>
      </header>

      <section className="history-text">
        <div className="history-item">
          <img
            src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/Amherstburg.png"
            alt="Amherstburg in the mid-19th century"
            className="history-image"
          />
          <div className="history-description">
            <h3>Amherstburg in the Mid-19th Century</h3>
            <p>
              Church-building seems to have been synonymous with community-building
              in the settlements. Residents and missionaries developed AME and Baptist
              churches and Sunday schools in even the smallest settlements, often
              building them from hewn logs. They welcomed newcomers and supported the
              spiritual, material, and educational needs of residents. Those settlements
              and their churches were central to developing a strong sense of free Black
              identity and culture. They nurtured and educated a generation of leaders
              who would return to Michigan after the War for Black Freedom and take up
              the work of Black community-building throughout southern Michigan.
            </p>
          </div>
        </div>

        <div className="history-item">
          <img
            src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/settlements.png"
            alt="Location of Black settlements in Ontario"
            className="history-image"
          />
          <div className="history-description">
            <h3>Location of Black Settlements in Ontario</h3>
            <p>
              Baptist men and women from settlements in Ontario such as Amherstburg,
              Dresden, Chatham, Gosfield, and Collingwood developed Baptist churches in
              Grand Rapids, Kalamazoo, Lansing, Flint, Ypsilanti, Jackson, Adrian, and
              Ann Arbor. Mt Olive was started by the children of self-emancipated slaves
              who had taken refuge across the river and built communities there. Many of
              Mt Olive’s early members came across into Michigan as young adults and built
              the Southside Black neighborhood while Billy Durant was still making
              horse-drawn carriages.
            </p>
          </div>
        </div>

        <div className="history-item">
          <img
            src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/headstone.png"
            alt="Headstone recognizing Black settlers"
            className="history-image"
          />
          <div className="history-description">
            <h3>Headstone Recognizing Black Settlers in Kingsville</h3>
            <p>
              This headstone recognizes the role of Black settlers in the Kingsville
              settlement. It contains the names of a number of Mt Olive’s founding families
              including the Jacksons, Jenkins, Jones, Johnsons, Lyons, Owens, Ryers, and
              Saunders.
            </p>
          </div>
        </div>

        <div className="founders">
          <h3>Founders</h3>
          <h4>Rev. William Isaac Lyons</h4>
          <img
            src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/Lyons.png"
            alt="Rev. William Isaac Lyons"
            className="history-image"
          />
          <p>
            William Isaac Lyons (1842-1911), an elder newly arrived from the Lansing area,
            preached in Flint’s Black community during the first five years of its existence.
            He was never the pastor of an organized church in Flint, but he realized the
            importance of a Baptist church to Black life and worked together with his
            neighbors and with First Baptist church to organize a community that would,
            after his death, become Mt Olive Missionary Baptist Church.
          </p>
          <p>
            Lyons had come to Flint in the 1890s in his early fifties with his wife, Margaret
            Ryers Lyons. He had been born in 1842 or 1843 in Ontario, just across the Detroit
            River in Amherstburg or Malden Township and had come across into Michigan in
            the 1860s. He and his first wife, Mahala Lang (1846–1879), made their home in
            rural Mason, Michigan just south of Lansing. They raised a large family there,
            while he worked as a laborer, and as a preacher in both AME and Baptist groups
            in and around Lansing.
          </p>
        </div>

        <div className="history-text">
          <div className="history-item">
            <h3>By 1899, William Lyons Had Moved to Flint</h3>
            <p>
              By 1899, William Lyons had moved to Flint and was working as a laborer and a leader at the established AME and the emerging Baptist communities. 
              In 1906 he was living on Lyon Street. Before moving to Flint, Lyons was a pastor at Zion Baptist church in Lansing in 1894, preaching at Byrd Hall at Main and Division. 
              In 1895 and 1896 he was living on Isaac Street (Indianapolis Freeman). In 1896, he organized an Emancipation Day celebration on August 3rd in Lansing and invited government officials. 
              Zion disbanded in 1906, hoping in 1907 to reorganize under a different name.
            </p>
          </div>

          <div className="history-item">
            <h3>Mrs. Sarah F. Jackson Howard</h3>
            <p>
              Mrs. Sarah F. (Jackson) Howard (1856/8-1927), from Chatham, Ontario, hosted the congregation in her home at 507/9 E. 9th St. 
              Mrs. Howard had come to Flint in her early 20s and married Charles A. Howard, also of Ontario, there in 1883. 
              They had a number of children. By the time she began hosting the fledgling Mt. Olive community, she was a widow in her 50s with one surviving child, her daughter, Neta.
            </p>
          </div>

          <div className="history-item">
            <h3>Rev. Robert Gillard</h3>
            <p>
              Like Rev. William Lyons, Rev. Robert Gillard (c.1845-1914) was not the minister of an established church at Mt Olive, but rather a traveling missionary who worked to build Black Baptist churches throughout the region. 
              He lived in Ann Arbor and held the position of state Missionary of the Michigan Baptist Convention. 
              He worked in Kalamazoo and Adrian in the 1880s, at Messiah Baptist in Grand Rapids in the 1890s, and in Jackson and Flint in the first decade of the 20th century.
            </p>
          </div>

          <div className="history-item">
            <h3>Rev. Daniel L. Jackson 1910</h3>
            
            <p>
              Daniel Jackson, a minister from Toledo, answered that invitation and came to Flint. 
              He served as a minister here for a brief time in 1910. Because his predecessors were elders, organizers, or missionaries, Jackson is likely to be the first person to be considered the minister of Mt Olive Church. 
              He boarded with the Linney family at 1718 Pine St. He appears to have returned to Toledo.
            </p>
            <img
              src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/JennieJohnson.jpg"
              alt="photo"
              className="history-image"
            />
          </div>

          <div className="history-item">
            <h4>Rev. David C. Adams 1912-1914</h4>
            <p>
              In March 1912, the community was called “Mt Olive Mission” on E. 9th St. and a new minister, Rev. David C. Adams, preached Sunday mornings and evenings. 
              Adams also held a week-long series of revival meetings. Mt Olive showed up in the Flint City Directory in 1913 and 1915 with Adams as minister, with services Sunday morning and Wednesday evening, and Sunday School.
            </p>
          </div>

          <div className="history-item">
            <h4>Rev. Herbert Leslie Dungy 1914</h4>
            <p>
              The first pastor of the newly-founded church in 1914 was Rev. Herbert Leslie Dungy. 
              Dungy, a native of Cleveland, Ohio, is listed as a student at the University of Michigan’s School of Divinity in 1913. He was likely the minister who hosted the formal formation of the church at the Mission. Dungy preached from the core principles of AME and Baptist ideas, likely organizing Mt. Olive as part of the Detroit Convention system.
            </p>
            <img
              src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/HerbertLeslieDungy.png"
              alt="photo"
              className="history-image"
            />
            <img
              src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/HerbertLeslieDungy2.jpg"
              alt="photo"
              className="history-image"
            />
            <img
              src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/HerbertLeslieDungy3.jpg"
              alt="photo"
              className="history-image"
            />
          </div>

          <div className="history-item">
            <h4>Rev. Bolen (1914-1916)</h4>
            <p>
              Rev. Bolen, the last pastor of the early church, led Mt. Olive from 1914 to 1916. 
              During his tenure, the church's congregation continued to grow, reflecting the increasing prominence of Black Baptist churches in Michigan and the central role of Mt. Olive in Flint's Black community.
            </p>
          </div>
        </div>

<div className="history-item">
  <h4>Rev. Joseph Caldwell Nicholas 1917-1923</h4>
  <p>
    Joseph Caldwell Nicholas (1883-1940) was from New Orleans, the son of a minister. He studied at Virginia Union Theological Seminary and at McMaster in Montreal. He and his wife Viola B. Lloyd arrived in Flint in 1917 with their infant son Joseph Jr. During his pastorate, new pews were installed in the church, and a playground was built. The church purchased a parsonage at 1608 Park St. where Nicholas lived through 1923. He was ill during the final months of his pastorate and he and his family returned to New Orleans.
  </p>
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/Nichols.png" alt="photo" className="history-image" />
</div>

<div className="history-item">
  <h4>Rev. Wade Hampton McKinney 1923-1929</h4>
  <p>
    Wade McKinney (1892-1963) was born in Cleveland, Ga., to Wade and Mary Brown McKinney. He attended Atlanta Baptist College Academy, Morehouse College, and Colgate Rochester Theological Seminary and served in the U.S. Army in World War I. He came to Mt Olive in 1923 and lived at 1617 Harrison until moving to the parsonage at 1608 Park. In 1924 he married Annie Ruth Berry (1900-1966), who had been born in Birmingham, Ala., to Rev. Samuel and Ada Virginia Berry. Ruth Berry was educated at Spelman College and Columbia University.
  </p>
  <p>
    By the time he began in 1923, the mass migration to Flint had begun, and the church was ramping up to meet the needs of recent migrants in the city. In June 1924 a singing group known as “The Ford Eight” visited Flint and performed at Mt Olive. The entrance fee was 25 cents. In 1925 the NAACP met at Mt Olive. In November of that same year a week-long series of evangelical events was held at Mt Olive with a visiting preacher from Connecticut. Miss Dorothy Green sang “Steal Away to Jesus” and Mrs. Ruth McKinney sang “Stand By Me.”
  </p>
  <p>
    During McKinney’s ministry, the church grew from less than 70 members to over 300. He established a church administrative structure, missionary society, a chapter of the Baptist Young People’s Union, the Ada Berry Bible class (named after his mother-in-law), Women's Day, a Senior Usher Board, a choir, a deacon board, and the trustee board. Rev. McKinney attended the Michigan-Ontario Baptist convention in Windsor in 1925 and read the convention reports for his evening sermon. In 1925 the membership was estimated at 200 (with 75 owning or purchasing their homes) when Rev. R.L. Bradby from Detroit’s Second Baptist and president of the Michigan-Ontario Baptist Convention launched a building fund for Mt Olive.
  </p>
  <p>
    The American Baptist Home Mission Society engaged an architect. By 1926 services featured both a senior and a junior choir and performed songs such as Harry Burleigh’s “Deep River,” Felix Mendelsson’s “Oh Rest in the Lord,” and Holton's “The Chimes of the Holy Night.” The McKinney family moved to Cleveland in 1928 to lead the large but divided Antioch Church where they became religious and community leaders who fought for civil rights. Rev. Wade Hampton McKinney is featured in the Morehouse College International Hall of Honor, and his family papers and photos are on file at Cleveland Public Library.
  </p>
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/WadeHamptonMcKinney.png" alt="photo" className="history-image" />
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/WadeHamptonMcKinney2.png" alt="photo" className="history-image" />
</div>

<div className="history-item">
  <h4>Rev. William M. Epps, Interim 1928</h4>
  <p>
    Rev. William Epps preached at Mt Olive for a few months in the Fall of 1928. He was a laborer and auto worker who lived at 510 Kennelworth with his wife Mildred.
  </p>
</div>

<div className="history-item">
  <h4>Rev. Louis Robert Webster Johnson 1928-1930</h4>
  <p>
    Rev. LRW Johnson came to Flint to work at Mt Olive. His wife and children remained in Virginia. He was a boarder at 1520 Park St. in 1929 and 1930. By 1931 he was the pastor of New Hope Baptist Church at 1703 Elm Street and he was living at 2046 Stanford Ave.
  </p>
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/LouisRobertWebsterJohnson.jpg" alt="photo" className="history-image" />
</div>

<div className="history-item">
  <h4>Rev. Paschall Lee Sanders 1932-1933</h4>
  <p>
    Rev. Paschall Sanders was born in Louisiana and had served as a minister in Texas before coming to Flint in 1931 with his wife Mary and their children. They initially lived at 810 Pasadena and he was the minister of Canaan Baptist Church at 910 E. Gillespie Ave. In 1932 they moved to 424 E. Wellington. By 1934 they had departed for Madison, Wisconsin, where he would continue his ministry.
  </p>
</div>

<div className="history-item">
  <h4>Rev. Junius H. Thomas 1934-1936</h4>
  <p>
    Junius Thomas was the pastor of Mt Olive from 1934 through 1936. He and his wife Cassie lived at 601 E 9th. He was born in Alabama around 1885 and had been a minister in Alabama, North Carolina, and West Virginia before coming to Flint and serving as the minister of New Hope Baptist at 1703 Elm Street. He later moved to Durham, North Carolina by 1940.
  </p>
</div>

<div className="history-item">
  <h4>Rev. W.S. Winston, Interim 1937</h4>
  <p>
    It is not yet clear who Rev. Winston was. He may have been a member of the church, possibly Willis Winston or William Winston, both of whom lived in the neighborhood.
  </p>
</div>

<div className="history-item">
  <h4>Rev. E.J. Timmons, Interim 1938</h4>
  <p>
    Rev. E.J. Timmons served as an interim pastor in 1938. James Timmons was born in 1890 in South Carolina, served in World War I, and had moved to Flint by 1929. He was an autoworker living at 2033 Stanford Ave. with his wife Verna throughout the 1930s. He died in 1957 in Flint and is buried at River Rest Cemetery.
  </p>
</div>

<div className="history-item">
  <h4>Rev. Robert Roscoe Turpin 1939-1972</h4>
  <p>
    Born in Alabama and educated at Morehouse College and Cornell University, Rev. Robert R. Turpin (May 22, 1886 - January 13, 1986) came to Mt Olive with his wife Annie and their two sons, Robert and Charles, in 1939. He had recently served as a minister in Leroy, New York for 13 years. The family lived at 1419 Clifford St. Turpin began his work at Mt Olive in January and was officially installed in October of 1939. Within his first five years in the position, Turpin had become a recognized leader in the Flint community, urging the city to appoint more Black residents in the city services departments, serving as President of the Progressive Ministers Interdenominational Alliance and as the Vice President of the Flint Council of Churches.
  </p>
  <p>
    Under his leadership, Mt Olive saw large growth, quadrupling the membership. He led the effort to build a new and larger building at 424 E. Kennelworth and to pay off its mortgage. The Fellowship Hall has been named in his honor. He is remembered by members for his understated preaching style, his ability to strengthen church finances, and his emphasis on punctuality.
  </p>
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/RobertRoscoeTurpin.jpg" alt="photo" className="history-image" />
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/RobertRoscoeTurpin2.jpg" alt="photo" className="history-image" />
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/RobertRoscoeTurpin3.jpg" alt="photo" className="history-image" />
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/RobertRoscoeTurpin4.jpg" alt="photo" className="history-image" />
</div>

<div className="history-item">
  <h4>Rev. Dr. Roy Ivory Greer Jr. 1972-2008</h4>
  <p>
    Rev. Roy Greer (1935-2008) was born in Henderson, Texas. He began ministry work at the age of 12 doing revivals across the country, with his 12-year-old uncle, Bishop T.T. Terry. They were affectionately known as the twin preachers. He was educated at the Southern Bible Institute in Dallas, TX; John Wesley College in Owosso, MI; Grand Rapids Baptist College and Seminary; and Calvary Christian College in Flint, MI. Greer was the 4th pastor of Mt Olive and served from 1972 to 2008. Under his leadership, Mt Olive grew significantly.
  </p>
  <p>
    The church moved to a new location at 1500 2nd Street in 1974. The sanctuary was named the "Roy Ivory Greer, Sr. Memorial Chapel" in his honor. Rev. Greer is remembered as a visionary leader who brought numerous families to the church and helped the congregation grow spiritually.
  </p>
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/RoyIvoryGreer.png" alt="photo" className="history-image" />
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/RoyIvoryGreer2.png" alt="photo" className="history-image" />
  <img src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/RoyIvoryGreer3.png" alt="photo" className="history-image" />
</div>

<div className="history-item">
  <h4>Rev. Roosevelt Austin, interim 2009</h4>
  <p>
    Rev. Austin, the senior pastor of Zion Missionary Baptist in Saginaw, MI, served as interim minister at Mt Olive in 2009.
  </p>
</div>

<div className="history-item">
  <h4>Rev. Major Stewart 2009-2016</h4>
  <p>
    Rev. Stewart is from Muskegon Heights, Michigan and was called to serve as pastor of Mt Olive in 2009. 
    He is a graduate of Eastern Michigan University and holds a doctorate in theology from United Theological Seminary in Dayton, OH. 
    He and his wife Carla Brooks Stewart raised three daughters: Alexandria Janine, Mikaela Ann, and Karissa Danielle.
  </p>
  <p>
    Reverend Stewart worked to make Mt Olive debt free, burning the mortgage for the Family Life Center in front of the congregation in June 2014. 
    During his ministry, the church produced the video history, “This Far by Faith,” in honor of its 100th anniversary. 
    He acquired three properties adjacent to the church and extended youth ministries and programming. 
    He has since served as a pastor of The Greater Mt Sinai Baptist Church in Charlotte, NC.
  </p>
  <img
    src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/MajorStewart.png"
    alt="photo"
    className="history-image"
  />
</div>

<div className="history-item">
  <h4>Rev. Ronald Wilson, interim 2017</h4>
  <p>
    Rev. Wilson served as Associate Pastor under Rev. Greer and served as interim minister in 2017.
  </p>
</div>

<div className="history-item">
  <h4>Rev. Jevon Q. Catlett 2018-present</h4>
  <p>
    Rev. Jevon Q. Catlett, originally from Hopkinsville, Kentucky, was called to preach at the age of 13. 
    He joined the St. Bethlehem Baptist Church, under the leadership of Pastor Roland Butler, Jr., where he preached his first sermon. 
    Rev. Catlett was educated at Lane College, Jackson, Tennessee, and United Theological Seminary in Dayton, Ohio. 
    He became a licensed minister in 2003 and was ordained in 2009. Prior to accepting the call to Mt Olive in September of 2018, Rev. Catlett served at Mt. Ararat Missionary Baptist Church in Birmingham, Alabama, and Greater Hope Baptist Church in Murray, Kentucky.
  </p>
  <p>
    “God has indeed proved himself again. I am most thankful for what God has already done in the life of Mt. Olive. 
    This church has an amazing history and has had great leaders in the past. I am happy, excited, and grateful to join Mt. Olive as pastor to lead, learn, and grow with them as well as within the community,” said Rev. Catlett regarding his installation.
  </p>
  <p>
    He and his wife Symone (Mays) have three children: Jayce, Jaelyn, and Jrue.
  </p>
  <img
    src="https://storage.googleapis.com/flint-floral-park/ChurchPastors/JevonCatlett.png"
    alt="photo"
    className="history-image"
  />
</div>
      </section>
    </div>
  );
}