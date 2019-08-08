import React, {forwardRef, useRef, useImperativeHandle, createRef} from 'react';
function FancyInput(props, ref) {
	const inputRef = useRef();
	// 执行逻辑是: useImperativeHandle(ref, create, deps);
	// 把create执行的结果挂着到ref.current上ref.current = create();
	// ref是父组件传过来的
	useImperativeHandle(ref, () => ({
	  focus: () => {
		inputRef.current.focus();
	  }
	}));
	return <input ref={inputRef} />;
  }
  
  FancyInput = forwardRef(FancyInput);

  export default function App() {
	const FancyInputRef = createRef(null);
	const handleClick = () => {
		// FancyInputRef在commitAttachRef方法调用时会吧ref.current = FancyInput的实例
		FancyInputRef.current.focus();
	}
	return (
		<>
			<FancyInput ref={FancyInputRef} />
			<button onClick={handleClick}>点击</button>
		</>
	);
}