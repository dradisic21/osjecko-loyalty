import { LoaderSkeleton } from "../../components/LoaderSkeleton/LoaderSkeleton"

export function SkeletonTable() {
  return (
    <table className="min-w-full font-inter ">
      <thead className="bg-white border-b">
        <tr>
          <th
            scope="col"
            className="text-14p font-bold text-primary-black px-15p py-12p text-left"
          >
            DATUM
          </th>
          <th
            scope="col"
            className="text-14p font-bold text-primary-black px-15p py-12p text-left"
          >
            KOD
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
        <tr>
          <td className="py-4p pr-4p">
            <LoaderSkeleton />
          </td>
          <td className="py-4p">
            <LoaderSkeleton />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
