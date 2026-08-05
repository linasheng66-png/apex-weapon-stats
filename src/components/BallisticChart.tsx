"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


type Props = {
  bulletSpeed?: number;
};


export default function BallisticChart({

  bulletSpeed

}: Props) {



  const speed = Number(bulletSpeed) || 300;



  const data = [

    0,
    50,
    100,
    150,
    200,
    250,
    300

  ].map((distance)=>{


    // 子彈飛行時間
    const time =
      distance / speed;



    // 重力下墜
    const drop =
      0.5 *
      9.8 *
      Math.pow(time,2);



    return {

      distance,

      time:
        time.toFixed(3),


      drop:
        (drop * 100).toFixed(1)

    };


  });




  return (

    <div>


      <h3 className="
      text-xl
      mb-5
      ">

        Bullet Speed:
        {" "}
        {speed}
        {" "}
        m/s

      </h3>




      <ResponsiveContainer

        width="100%"

        height={350}

      >


        <LineChart

          data={data}

        >


          <CartesianGrid

            strokeDasharray="3 3"

          />



          <XAxis

            dataKey="distance"

            label={{

              value:"Distance (m)",

              position:"insideBottom"

            }}

          />



          <YAxis

            label={{

              value:"Drop (cm)",

              angle:-90,

              position:"insideLeft"

            }}

          />



          <Tooltip />



          <Line

            type="monotone"

            dataKey="drop"

            strokeWidth={3}

            name="Bullet Drop"

          />



        </LineChart>


      </ResponsiveContainer>







      <table className="
      mt-6
      w-full
      text-center
      ">


        <thead>

          <tr className="text-gray-400">

            <th>
              Distance
            </th>

            <th>
              Time
            </th>

            <th>
              Drop
            </th>


          </tr>

        </thead>




        <tbody>


        {

          data.map((row)=>(

            <tr key={row.distance}>


              <td>
                {row.distance}m
              </td>


              <td>
                {row.time}s
              </td>


              <td>
                {row.drop}cm
              </td>


            </tr>


          ))

        }


        </tbody>



      </table>



    </div>

  );


}