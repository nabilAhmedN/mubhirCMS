
import './App.css'
import SeoSettings from './Pages/SeoSettings/SeoSettings'
import TitleSection from './Pages/TitleSection/TitleSection'
import CategoriesSection from './Pages/CategoriesSection/CategoriesSection'
import CtaSection from './Pages/CtaSection/CtaSection'
import ValuePropositionSection from './Pages/ValuePropositionSection/ValuePropositionSection'
import DemoValuePropositionSection from './Pages/DemoValuePropositionSection/DemoValuePropositionSection'
import FAQSection from './Pages/FAQSection/FAQSection'
import SubjectCards from './Pages/SubjectCards/DemoSubjectCards'
import PricingSection from './Pages/PricingSection/PricingSection'
import MixedSection from './Pages/MixedSection/MixedSection'
import DemoSubjectCards from './Pages/SubjectCards/DemoSubjectCards'
import SubjectCard from './Pages/SubjectCards/SubjectCard'



function App() {

  return (
    <>
    {/* <DemoValuePropositionSection/> */}

        {/* <MixedSection/> */}
        {/* <PricingSection/>
        <CategoriesSection/>
        <FAQSection/>*/}
        <SubjectCard/>
        <DemoSubjectCards/>
        <ValuePropositionSection/>
        <CtaSection/>
        {/* <DemoSeoSettings/> */}
        {/* <SeoSettings/> */}
        {/* <TitleSection/> */}
    </>
  )
}

export default App
