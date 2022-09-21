import Item from "./Item";
import './Home.css'
const icon = [
    'https://s3-alpha-sig.figma.com/img/ee5d/7134/af6932e0d359fce7f35402c40d54bc99?Expires=1664755200&Signature=NCdXIb53zvbJldoMoVaR-iK-AcflYFpbTyVHdJzS3jYwlvIzL5GrCCNU9JyUVM0hG5H90sAo17kVatFmhztYUfLr0m2divNvDrGcL73G3DbofO3SiKhAH9vFu2Zy9KaazXqo8WfocMLBolLl3UER9dzaYyO1xMisRNxsTgQ8IaC5sdo7UnLd8HU~htKldVnWQ03zGnOUaJYbdj2~1igZHDl4OS0e0M0i~rSdHYjRGIZfkedGBijU4rJAZ9eyMLLv5gcQ4xDvJT2oVEBCOXVWgqDHJwneLQz0MRXJUALli5b6lrjqrANA6OnwWfWtpVcKEaZAKXISVUOez-qmfIRgzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/2283/e203/66ceb1e8d5d276758ee00c3663bae8e9?Expires=1664755200&Signature=ZjJLVK5zQBo7g1hwU1K~ZfhIy9EPtiwMCKDyfIKhglGmeRkeJYXV~cbFC3exFmR1hMcrMRkN8r6gkFD7MqWdDzxAcaR0z1kTccIk--ojHmULu6E6vg~l0nakfnEphG81kduVybI9cV~pxNEbIL25yQer-4LaNjMVfCq6cftd7~3m6Db9IDE8gGtoF6GAV7ufEUMl0mI15DDRz8B7ZUOPUuQ7EdHCcW1BU6~tez-JL4pNiyUPgNizKZwmD5lG33vhZnzEBLmMhfhL2beYyggT2AbuA7KmyFTUitzZVS23EBcDpUmBAOOU3QBjshX6xN0HKCUDO7kxqiozhgXk4j0ZnA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    'https://s3-alpha-sig.figma.com/img/c9c3/230b/112f1704f67d2cb7c852b396cde6858e?Expires=1664755200&Signature=OxSL8h78NusH8n5kcQ8odBw1h-winqT2CcMbHT-7XV4PImbmnzkn~lj9ulgygL8iHV3pYA2hlCsiL5BwUbNAiQmPcSr6XduJpqGfpLBZyvbanBMTLHAxIKnw7TlAwH6aAmMAQXnoMrPmHnys8ysbveGbhgzFfYNbHP9OQUe2x-BotuGiICAZqMuDIMIGp-Jnew6qjxDIYPhDc97XN~HCQJhDmP2TxvU4io~Ky8-zFpvpiokSkwmHxxEFOxy2O-9H3p85xW1auqjVB1MZ7kGRD4-9wXKW~8HQM6Ciz51vvY9wwTh8WAI7m~BZGO96ulSghLR7HZmIQHmA~Mgah3HKIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
]
function Home() {
    return (

        <>
            <img className="logo" src='https://s3-alpha-sig.figma.com/img/be54/004d/40b2754bf32a69e46f3afbc0bc31cd28?Expires=1664755200&Signature=MZ6uoEjer9xEiXS6SRIwry~WNcxGFC-g9t0JYS19~8WkOiNNBfjqS3yS5q-SzHyn6BVpRVDW19t7OrtgHLFECMgdsCc8jiJ4sxK7SifhBjPDIV5NClewWtgYeGQC4IxI6Z2aUPaJE-dIh-~-NCnQjewiYgQ8qB2eXJasKwtTkXNZsll3bf46X5KPW4qbcj4rlmZJ0oR7R2ZdrHK1TmxOjMzMJCxG3icWfd9-tTHwZ2AnfAvMPiJOKRUMMN7OdDC9IUwyz0B9wYZFkAZ6p037i0cU3C1wdO80NEQ7CxQSWivG~1iWWFDq~NfqyelnoSMVQ2CLPVVeWvBjfLuC0k1~SQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt="logo"></img>

            <div className="description">
                <h3 className="title">
                    Lorem ipsum dolor sit amet?
                </h3>
                <p className="description_content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                </p>
            </div>
            <div className="list-item">
                {
                    icon.map((e, index) => {
                        return (
                            <Item src={e} key={index} />
                        )
                    })
                }
            </div>
        </>
    );
}

export default Home;