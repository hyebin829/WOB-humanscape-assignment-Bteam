import { v4 as uuidv4 } from 'uuid'
import DropDownItem from './DropDownItem'
import styles from './DropDown.module.scss'

interface IDropDownProps {
  SuggestedKeyword: string[]
  isLoading: boolean
}
const DropDown = ({ SuggestedKeyword, isLoading }: IDropDownProps) => {
  if (SuggestedKeyword.length === 0 && !isLoading) return <span />

  return (
    <div className={styles.dropDownWrapper}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          <div className={styles.dropDownTitle}>추천검색어</div>
          <ul>
            {SuggestedKeyword.map((el: string) => {
              return <DropDownItem key={uuidv4()} keyWord={el} />
            })}
          </ul>
        </>
      )}
    </div>
  )
}

export default DropDown
