import Cal, { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function CalltoAction() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return(
		<div className="flex flex-col gap-[3rem] h-full mt-2 mb-3 justify-center w-screen ">
			 <h1 className='text-white text-center font-bold text-6xl'>Want to meet me ? </h1>
			 <div className="flex flex-row w-full relative items-center">
				<div className="max-w-[90%] w-full relative">
						<Cal 
							calLink="lucaszebre/15min"
							style={{width:"100%",height:"100%",overflow:"scroll"}}
							config={{layout: 'month_view'}}
						
						/>; 
					
				</div>
			 </div>
		
			
		</div>
	
	)
  };